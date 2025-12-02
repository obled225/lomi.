import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { BeneficiaryPayoutsService } from './beneficiary-payouts.service';
import { CreateBeneficiaryPayoutDto } from './dto/create-beneficiary-payout.dto';
import { BeneficiaryPayoutResponseDto } from './dto/beneficiary-payout-response.dto';
import { ApiKeyGuard } from '@/core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '@/core/common/decorators/current-user.decorator';

@ApiTags('Beneficiary Payouts')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('beneficiary_payouts')
export class BeneficiaryPayoutsController {
  constructor(private readonly service: BeneficiaryPayoutsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new beneficiary_payout' })
  @ApiResponse({
    status: 201,
    description: 'The beneficiary_payout has been successfully created.',
    type: BeneficiaryPayoutResponseDto,
  })
  create(
    @Body() createDto: CreateBeneficiaryPayoutDto,
    @CurrentUser() user: AuthContext,
  ) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all beneficiary_payouts' })
  @ApiResponse({
    status: 200,
    description: 'List of beneficiary_payouts',
    type: [BeneficiaryPayoutResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a beneficiary_payout by ID' })
  @ApiResponse({
    status: 200,
    description: 'The beneficiary_payout',
    type: BeneficiaryPayoutResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
