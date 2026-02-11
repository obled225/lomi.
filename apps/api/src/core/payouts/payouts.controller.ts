import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '../common/decorators/current-user.decorator';
import { PayoutsService } from './payouts.service';
import { CreateWavePayoutDto } from './dto/create-payout.dto';

@ApiTags('Payouts')
@ApiSecurity('X-API-KEY')
@UseGuards(ApiKeyGuard)
@Controller('payout')
export class PayoutsController {
  constructor(private readonly payoutsService: PayoutsService) {}

  @Post('wave')
  async createWavePayout(
    @Body() createPayoutDto: CreateWavePayoutDto,
    @CurrentUser() user: AuthContext,
  ) {
    createPayoutDto.organizationId = user.organizationId;
    createPayoutDto.merchantId = user.merchantId;
    return this.payoutsService.createWavePayout(createPayoutDto);
  }
}
