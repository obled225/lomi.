import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { CheckoutSessionsService } from '../../checkout-sessions/checkout-sessions.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { CheckoutSessionResponseDto } from './dto/checkout-session-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('Checkout Sessions')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('checkout_sessions')
export class CheckoutSessionsController {
  constructor(private readonly service: CheckoutSessionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new checkout_session' })
  @ApiResponse({
    status: 201,
    description: 'The checkout_session has been successfully created.',
    type: CheckoutSessionResponseDto,
  })
  create(@Body() createDto: CreateCheckoutSessionDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all checkout_sessions' })
  @ApiResponse({
    status: 200,
    description: 'List of checkout_sessions',
    type: [CheckoutSessionResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a checkout_session by ID' })
  @ApiResponse({
    status: 200,
    description: 'The checkout_session',
    type: CheckoutSessionResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
