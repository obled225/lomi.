import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { PaymentRequestsService } from './payment-requests.service';
import { CreatePaymentRequestDto } from './dto/create-payment-request.dto';
import { PaymentRequestResponseDto } from './dto/payment-request-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('Payment Requests')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('payment_requests')
export class PaymentRequestsController {
  constructor(private readonly service: PaymentRequestsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new payment_request' })
  @ApiResponse({
    status: 201,
    description: 'The payment_request has been successfully created.',
    type: PaymentRequestResponseDto,
  })
  create(@Body() createDto: CreatePaymentRequestDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all payment_requests' })
  @ApiResponse({
    status: 200,
    description: 'List of payment_requests',
    type: [PaymentRequestResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a payment_request' })
  @ApiResponse({
    status: 200,
    description: 'The payment_request',
    type: PaymentRequestResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
