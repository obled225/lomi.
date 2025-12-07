import { Controller, Get, Post, Body, UseGuards, Header } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AppService } from './app.service';
import { ApiKeyGuard } from './core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from './core/common/decorators/current-user.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('robots.txt')
  @Header('Content-Type', 'text/plain')
  getRobots(): string {
    return `User-agent: *
Disallow: /
`;
  }

  @Post('test/webhook-event')
  @UseGuards(ApiKeyGuard)
  async testWebhookEvent(
    @Body() body: { event: string; data: any },
    @CurrentUser() user: AuthContext,
  ) {
    const payload = {
      ...body.data,
      organization_id: user.organizationId,
      merchant_id: user.merchantId,
    };

    // Emit the event
    this.eventEmitter.emit(body.event, payload);

    return {
      success: true,
      message: `Event '${body.event}' emitted`,
      payload,
    };
  }
}
