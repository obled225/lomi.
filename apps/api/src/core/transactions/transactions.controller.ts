import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { TransactionsService } from './transactions.service';
import { TransactionResponseDto } from './dto/transaction-response.dto';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '@core/common/decorators/current-user.decorator';

@ApiTags('Transactions')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}

  @Get()
  @ApiOperation({ summary: 'List all transactions' })
  @ApiResponse({
    status: 200,
    description: 'List of transactions',
    type: [TransactionResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a transaction by ID' })
  @ApiResponse({
    status: 200,
    description: 'The transaction',
    type: TransactionResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
