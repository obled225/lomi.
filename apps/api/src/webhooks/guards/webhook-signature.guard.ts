import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from '../../utils/supabase/supabase.service';
import * as crypto from 'crypto';

@Injectable()
export class WebhookSignatureGuard implements CanActivate {
  constructor(private readonly supabase: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const signature = request.headers['x-merchant-signature'];
    const webhookId = request.headers['x-webhook-id'];

    if (!signature || !webhookId) {
      throw new UnauthorizedException('Missing signature or webhook ID');
    }

    // Fetch webhook config
    const { data: webhook, error } = await this.supabase.rpc(
      'get_webhook_by_id',
      { p_webhook_id: webhookId },
    );

    if (error || !webhook || webhook.length === 0) {
      throw new UnauthorizedException('Invalid webhook configuration');
    }

    const verificationToken = webhook[0].verification_token;
    if (!verificationToken) {
      throw new UnauthorizedException('Webhook configuration error');
    }

    // Verify signature
    const rawBody = JSON.stringify(request.body);
    const expectedSignature = crypto
      .createHmac('sha256', verificationToken)
      .update(rawBody)
      .digest('hex');

    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature),
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid webhook signature');
    }

    // Attach webhook info to request
    request.webhookId = webhookId;
    request.merchantId = webhook[0].created_by; // created_by is the merchant_id
    request.organizationId = webhook[0].organization_id;

    return true;
  }
}
