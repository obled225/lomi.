import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { RefundsService } from './refunds.service';
import { CreateWaveRefundDto } from './dto/create-refund.dto';

@ApiTags('Refunds')
@ApiSecurity('X-API-KEY')
@UseGuards(ApiKeyGuard)
@Controller('refund')
export class RefundsController {
  constructor(private readonly refundsService: RefundsService) {}

  @Post('wave')
  async createWaveRefund(@Body() createRefundDto: CreateWaveRefundDto) {
    return this.refundsService.createWaveRefund(createRefundDto);
  }
}
