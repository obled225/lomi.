import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Param,
  Query,
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
import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { RefundResponseDto } from './dto/refund-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '../common/decorators/current-user.decorator';

@ApiTags('Refunds')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('refunds')
export class RefundsController {
  constructor(private readonly service: RefundsService) {}

  @Post()
  @ApiOperation({
    summary: 'Initiate a refund',
    description:
      'Initiates a refund for a completed transaction. Returns immediately with pending status. The actual refund is processed asynchronously by the payment provider (Wave, SPI, Stripe, etc.). Status updates are sent via webhooks. Partial refunds are supported - the refund amount can be less than or equal to the original transaction amount.',
  })
  @ApiResponse({
    status: 201,
    description: 'Refund initiated successfully with pending status',
    type: RefundResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input or refund amount exceeds transaction amount',
  })
  @ApiResponse({
    status: 404,
    description: 'Transaction not found or access denied',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  create(@Body() createDto: CreateRefundDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({
    summary: 'List all refunds',
    description:
      'Returns all refunds for your organization with pagination and optional filtering by status and date range.',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Filter by refund status',
    enum: ['pending', 'completed', 'failed', 'cancelled'],
  })
  @ApiQuery({
    name: 'startDate',
    required: false,
    description: 'Filter by start date (ISO 8601)',
    type: String,
  })
  @ApiQuery({
    name: 'endDate',
    required: false,
    description: 'Filter by end date (ISO 8601)',
    type: String,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of results to return',
    type: Number,
    example: 50,
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    description: 'Offset for pagination',
    type: Number,
    example: 0,
  })
  @ApiResponse({
    status: 200,
    description: 'List of refunds with pagination',
    type: [RefundResponseDto],
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findAll(
    @CurrentUser() user: AuthContext,
    @Query('status') status?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit?: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset?: number,
  ) {
    return this.service.findAll(
      user,
      status,
      startDate,
      endDate,
      limit,
      offset,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a refund by ID',
    description:
      'Returns detailed information about a specific refund, including its current status, related transaction, and provider details.',
  })
  @ApiParam({
    name: 'id',
    description: 'Refund UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Refund details',
    type: RefundResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Refund not found or access denied',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
