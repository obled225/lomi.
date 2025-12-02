import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerResponseDto } from './dto/customer-response.dto';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '@core/common/decorators/current-user.decorator';

@ApiTags('Customers')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('customers')
export class CustomersController {
  constructor(private readonly service: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({
    status: 201,
    description: 'The customer has been successfully created.',
    type: CustomerResponseDto,
  })
  create(@Body() createDto: CreateCustomerDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all customers' })
  @ApiResponse({
    status: 200,
    description: 'List of customers',
    type: [CustomerResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a customer by ID' })
  @ApiResponse({
    status: 200,
    description: 'The customer',
    type: CustomerResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
