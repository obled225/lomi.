import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  UseGuards,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CustomerResponseDto } from './dto/customer-response.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '../common/decorators/current-user.decorator';

@ApiTags('Customers')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  @ApiOperation({
    summary: 'List all customers',
    description:
      "Returns all customers for the authenticated merchant's organization. Supports filtering by search term, customer type, and activity status.",
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search by name or email',
    type: String,
  })
  @ApiQuery({
    name: 'type',
    required: false,
    description: 'Filter by customer type',
    enum: ['business', 'individual', 'all'],
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description:
      'Filter by activity status (active = has transactions, inactive = no transactions)',
    enum: ['active', 'inactive', 'all'],
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
    example: 1,
  })
  @ApiQuery({
    name: 'pageSize',
    required: false,
    description: 'Number of items per page',
    type: Number,
    example: 50,
  })
  @ApiResponse({
    status: 200,
    description: 'List of customers with pagination',
    schema: {
      properties: {
        customers: {
          type: 'array',
          items: { $ref: '#/components/schemas/CustomerResponseDto' },
        },
        pagination: {
          type: 'object',
          properties: {
            page: { type: 'number', example: 1 },
            pageSize: { type: 'number', example: 50 },
            totalCount: { type: 'number', example: 100 },
            totalPages: { type: 'number', example: 2 },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findAll(
    @CurrentUser() user: AuthContext,
    @Query('search') search?: string,
    @Query('type') type?: 'business' | 'individual' | 'all',
    @Query('status') status?: 'active' | 'inactive' | 'all',
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
    @Query('pageSize', new DefaultValuePipe(50), ParseIntPipe)
    pageSize?: number,
  ) {
    return this.customersService.findAll(
      user,
      search,
      type,
      status,
      page,
      pageSize,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get customer by ID',
    description:
      'Returns detailed information about a specific customer. Only accessible if the customer belongs to your organization.',
  })
  @ApiParam({
    name: 'id',
    description: 'Customer UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Customer details',
    type: CustomerResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Customer not found or access denied',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.customersService.findOne(id, user);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new customer',
    description:
      'Creates a new customer in your organization. The customer will be automatically linked to your organization.',
  })
  @ApiResponse({
    status: 201,
    description: 'Customer created successfully',
    type: CustomerResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  create(
    @Body() createDto: CreateCustomerDto,
    @CurrentUser() user: AuthContext,
  ) {
    return this.customersService.create(createDto, user);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a customer',
    description:
      'Updates an existing customer. Only customers belonging to your organization can be updated. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Customer UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Customer updated successfully',
    type: CustomerResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Customer not found or access denied',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateCustomerDto,
    @CurrentUser() user: AuthContext,
  ) {
    return this.customersService.update(id, updateDto, user);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a customer',
    description:
      'Soft deletes a customer. The customer will be marked as deleted but not removed from the database. Only customers belonging to your organization can be deleted.',
  })
  @ApiParam({
    name: 'id',
    description: 'Customer UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Customer deleted successfully',
    schema: {
      properties: {
        message: { type: 'string', example: 'Customer deleted successfully' },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Customer not found or access denied',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  remove(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.customersService.remove(id, user);
  }

  @Get(':id/transactions')
  @ApiOperation({
    summary: 'Get customer transactions',
    description:
      'Returns all transactions for a specific customer. Only accessible if the customer belongs to your organization.',
  })
  @ApiParam({
    name: 'id',
    description: 'Customer UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'List of customer transactions',
    schema: {
      type: 'array',
      items: {
        properties: {
          transaction_id: {
            type: 'string',
            example: '123e4567-e89b-12d3-a456-426614174000',
          },
          description: { type: 'string', example: 'Payment for Product A' },
          gross_amount: { type: 'number', example: 10000.0 },
          currency_code: { type: 'string', example: 'XOF' },
          created_at: { type: 'string', example: '2024-01-15T10:30:00Z' },
          status: { type: 'string', example: 'completed' },
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Customer not found or access denied',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  getTransactions(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.customersService.getTransactions(id, user);
  }
}
