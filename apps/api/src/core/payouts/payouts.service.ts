import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SupabaseService } from '../../utils/supabase/supabase.service';
import { CreateWavePayoutDto } from './dto/create-payout.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class PayoutsService {
  private readonly logger = new Logger(PayoutsService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async createWavePayout(createPayoutDto: CreateWavePayoutDto) {
    const {
      amount,
      currency,
      beneficiary,
      reason,
      organizationId,
      merchantId,
    } = createPayoutDto;

    // 1. Fetch Wave Provider Settings to get Aggregated Merchant ID
    const { data: providerSettings, error: providerError } =
      await this.supabaseService.rpc('fetch_wave_provider_settings', {
        p_organization_id: organizationId as string,
      });

    const waveSettings = providerSettings && (providerSettings as any)[0];

    if (providerError || !waveSettings?.provider_merchant_id) {
      this.logger.error(
        `Wave provider not configured for payout: ${providerError?.message}`,
      );
      throw new BadRequestException(
        'Wave provider settings not found or missing Aggregated Merchant ID',
      );
    }

    const aggregatedMerchantId = waveSettings.provider_merchant_id;
    this.logger.log(
      `Initiating Wave payout for org ${organizationId} via ${aggregatedMerchantId}`,
    );

    // 2. Prepare Payload for Edge Function
    const payload = {
      path: '/payout',
      method: 'POST',
      body: {
        amount: String(amount),
        currency,
        beneficiary,
        reason: reason || 'Payout',
        aggregatedMerchantId,
        clientReference: randomUUID(),
        merchantId,
        organizationId,
      },
    };

    // 3. Call Edge Function
    const projectRef = this.configService.get<string>('SUPABASE_PROJECT_REF');
    const anonKey = this.configService.get<string>('SUPABASE_PUBLISHABLE_KEY');
    const edgeFunctionUrl = `https://${projectRef}.supabase.co/functions/v1/wave`;

    try {
      const response = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${anonKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        this.logger.error(`Wave Payout Edge Function failed: ${errorText}`);
        throw new BadRequestException(`Payout failed: ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      this.logger.error(`Error processing payout: ${error.message}`);
      // If it's already a Nest exception, rethrow it
      if (
        error instanceof BadRequestException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Payout processing failed');
    }
  }
}
