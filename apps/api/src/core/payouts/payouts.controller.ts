import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { PayoutsService } from './payouts.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { PayoutResponseDto } from './dto/payout-response.dto';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '@core/common/decorators/current-user.decorator';

@ApiTags('Payouts')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('payouts')
export class PayoutsController {
  constructor(private readonly service: PayoutsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new payout' })
  @ApiResponse({
    status: 201,
    description: 'The payout has been successfully created.',
    type: PayoutResponseDto,
  })
  create(@Body() createDto: CreatePayoutDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all payouts' })
  @ApiResponse({
    status: 200,
    description: 'List of payouts',
    type: [PayoutResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a payout by ID' })
  @ApiResponse({
    status: 200,
    description: 'The payout',
    type: PayoutResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
