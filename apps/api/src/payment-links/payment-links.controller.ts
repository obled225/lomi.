import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { PaymentLinksService } from './payment-links.service';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';
import { PaymentLinkResponseDto } from './dto/payment-link-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('Payment Links')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('payment_links')
export class PaymentLinksController {
  constructor(private readonly service: PaymentLinksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new payment_link' })
  @ApiResponse({
    status: 201,
    description: 'The payment_link has been successfully created.',
    type: PaymentLinkResponseDto,
  })
  create(@Body() createDto: CreatePaymentLinkDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all payment_links' })
  @ApiResponse({
    status: 200,
    description: 'List of payment_links',
    type: [PaymentLinkResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a payment_link' })
  @ApiResponse({
    status: 200,
    description: 'The payment_link',
    type: PaymentLinkResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
