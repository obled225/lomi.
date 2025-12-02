import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiQuery,
} from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { BalanceBreakdownResponseDto } from './dto/balance-breakdown-response.dto';
import { AccountBalanceResponseDto } from './dto/account-balance-response.dto';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '@core/common/decorators/current-user.decorator';
import { Database } from '@utils/types/database.types';

type CurrencyCode = Database['public']['Enums']['currency_code'];

@ApiTags('Accounts')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly service: AccountsService) {}

  @Get('balance')
  @ApiOperation({ summary: 'Get balance breakdown' })
  @ApiQuery({
    name: 'target_currency',
    required: false,
    description: 'Target currency for conversion (e.g., USD, XOF)',
    enum: ['XOF', 'USD', 'EUR'],
  })
  @ApiResponse({
    status: 200,
    description: 'Balance breakdown with available, pending, and total balances',
    type: [BalanceBreakdownResponseDto],
  })
  getBalance(
    @CurrentUser() user: AuthContext,
    @Query('target_currency') targetCurrency?: CurrencyCode,
  ) {
    return this.service.getBalance(user, targetCurrency);
  }

  @Get('balance/simple')
  @ApiOperation({ summary: 'Get account balance for specific currency' })
  @ApiQuery({
    name: 'currency_code',
    required: false,
    description: 'Currency code to filter by (e.g., XOF, USD)',
    enum: ['XOF', 'USD', 'EUR'],
  })
  @ApiResponse({
    status: 200,
    description: 'Account balance information',
    type: [AccountBalanceResponseDto],
  })
  getAccountBalance(
    @CurrentUser() user: AuthContext,
    @Query('currency_code') currencyCode?: string,
  ) {
    return this.service.getAccountBalance(user, currencyCode);
  }
}
