import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { AccountResponseDto } from './dto/account-response.dto';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '@core/common/decorators/current-user.decorator';

@ApiTags('Accounts')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly service: AccountsService) {}

  @Get()
  @ApiOperation({ summary: 'List all accounts' })
  @ApiResponse({
    status: 200,
    description: 'List of accounts',
    type: [AccountResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a account by ID' })
  @ApiResponse({
    status: 200,
    description: 'The account',
    type: AccountResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
