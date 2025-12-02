import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { CustomerInvoicesService } from './customer-invoices.service';
import { CreateCustomerInvoiceDto } from './dto/create-customer-invoice.dto';
import { CustomerInvoiceResponseDto } from './dto/customer-invoice-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('Customer Invoices')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('customer_invoices')
export class CustomerInvoicesController {
  constructor(private readonly service: CustomerInvoicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer_invoice' })
  @ApiResponse({
    status: 201,
    description: 'The customer_invoice has been successfully created.',
    type: CustomerInvoiceResponseDto,
  })
  create(@Body() createDto: CreateCustomerInvoiceDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all customer_invoices' })
  @ApiResponse({
    status: 200,
    description: 'List of customer_invoices',
    type: [CustomerInvoiceResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a customer_invoice' })
  @ApiResponse({
    status: 200,
    description: 'The customer_invoice',
    type: CustomerInvoiceResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
