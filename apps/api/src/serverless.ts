import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import express, { Request, Response } from 'express';
import type { INestApplication } from '@nestjs/common';

let cachedApp: INestApplication;

async function createApp(): Promise<INestApplication> {
  if (cachedApp) {
    return cachedApp;
  }

  const expressApp = express();
  
  // Middleware to capture raw body for webhook signature verification
  // This must be added before NestJS body parser
  expressApp.use('/webhooks', express.raw({ type: 'application/json', limit: '10mb' }), (req, res, next) => {
    // Store raw body for webhook signature verification
    // Vercel serverless functions may provide body as Buffer or string
    (req as any).rawBody = Buffer.isBuffer(req.body) ? req.body : Buffer.from(req.body || '');
    next();
  });
  
  // Regular JSON body parser for API routes
  expressApp.use(express.json({ limit: '10mb' }));
  
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), {
    bodyParser: false, // Disable NestJS default body parser since we're handling it in Express
  });

  const config = new DocumentBuilder()
    .setTitle('lomi. API')
    .setDescription('Payment processing API for francophone West African businesses.')
    .setVersion('1.1.0')
    .addApiKey({ type: 'apiKey', name: 'X-API-KEY', in: 'header' }, 'X-API-KEY')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.init();
  cachedApp = app;

  return app;
}

export default async function handler(req: Request, res: Response) {
  const app = await createApp();
  
  // For Vercel serverless functions, ensure raw body is available for webhooks
  // Vercel may provide the raw body in different formats
  const vercelReq = req as any;
  const reqPath = vercelReq.url || '';
  
  if (reqPath.startsWith('/webhooks') && !vercelReq.rawBody) {
    // Try to get raw body from Vercel's request object
    if (vercelReq.body && Buffer.isBuffer(vercelReq.body)) {
      vercelReq.rawBody = vercelReq.body;
    } else if (vercelReq.body && typeof vercelReq.body === 'string') {
      vercelReq.rawBody = Buffer.from(vercelReq.body);
    } else if (vercelReq.body) {
      // Fallback: convert parsed body back to buffer (less ideal but works)
      vercelReq.rawBody = Buffer.from(JSON.stringify(vercelReq.body));
    }
  }
  
  // Get the underlying Express instance and handle the request
  const expressInstance = app.getHttpAdapter().getInstance();
  expressInstance(req, res);
}

