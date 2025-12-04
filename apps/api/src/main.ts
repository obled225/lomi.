import 'tsconfig-paths/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

async function bootstrap() {
  const expressApp = express();
  
  // Middleware to capture raw body for webhook signature verification
  expressApp.use('/webhooks', express.raw({ type: 'application/json', limit: '10mb' }), (req, res, next) => {
    (req as any).rawBody = req.body;
    next();
  });
  
  // Regular JSON body parser for API routes
  expressApp.use(express.json({ limit: '10mb' }));
  
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), {
    bodyParser: false, // We're handling body parsing with Express middleware
  });

  const config = new DocumentBuilder()
    .setTitle('lomi. API')
    .setDescription(
      'Payment processing API for francophone West African businesses.',
    )
    .setVersion('1.1.0')
    .addApiKey({ type: 'apiKey', name: 'X-API-KEY', in: 'header' }, 'X-API-KEY')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
