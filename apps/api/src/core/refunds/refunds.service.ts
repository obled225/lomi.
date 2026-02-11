import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SupabaseService } from '../../utils/supabase/supabase.service';
import { CreateWaveRefundDto } from './dto/create-refund.dto';

@Injectable()
export class RefundsService {
  private readonly logger = new Logger(RefundsService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async createWaveRefund(createRefundDto: CreateWaveRefundDto) {
    const { transactionId, amount, reason } = createRefundDto;
    this.logger.log(`Initiating Wave refund for transaction ${transactionId}`);

    const projectRef = this.configService.get<string>('SUPABASE_PROJECT_REF');
    const anonKey = this.configService.get<string>('SUPABASE_PUBLISHABLE_KEY');

    if (!projectRef || !anonKey) {
      throw new InternalServerErrorException('Supabase configuration missing');
    }

    const edgeFunctionUrl = `https://${projectRef}.supabase.co/functions/v1/wave`;

    try {
      const response = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${anonKey}`,
        },
        body: JSON.stringify({
          path: '/refund',
          method: 'POST',
          body: {
            transactionId,
            amount: String(amount), // Wave expects string
            currency: 'XOF', // Currently only XOF supported
            reason,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        this.logger.error(`Wave Edge Function failed: ${errorText}`);
        throw new InternalServerErrorException(`Refund failed: ${errorText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      this.logger.error(`Error processing refund: ${error.message}`);
      throw new InternalServerErrorException(error.message);
    }
  }
}
