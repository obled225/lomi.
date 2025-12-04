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
import { PayoutsService } from './payouts.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { PayoutResponseDto } from './dto/payout-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '../common/decorators/current-user.decorator';

@ApiTags('Payouts')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('payouts')
export class PayoutsController {
  constructor(private readonly service: PayoutsService) {}

  @Post()
  @ApiOperation({
    summary: 'Initiate a payout (withdrawal)',
    description:
      'Initiates a withdrawal from your account balance to a specified payout method (bank account or mobile money). Returns immediately with pending status. The actual payout is processed asynchronously by the payment provider (Wave, SPI, etc.). Status updates are sent via webhooks.',
  })
  @ApiResponse({
    status: 201,
    description: 'Payout initiated successfully with pending status',
    type: PayoutResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input or insufficient balance',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  create(@Body() createDto: CreatePayoutDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({
    summary: 'List all payouts',
    description:
      'Returns all payouts for your organization with pagination and optional filtering by status and date range.',
  })
  @ApiQuery({
    name: 'statuses',
    required: false,
    description: 'Filter by payout statuses (comma-separated)',
    type: String,
    example: 'pending,completed',
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
    description: 'List of payouts with pagination',
    type: [PayoutResponseDto],
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findAll(
    @CurrentUser() user: AuthContext,
    @Query('statuses') statuses?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit?: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset?: number,
  ) {
    const statusArray = statuses ? statuses.split(',') : undefined;
    return this.service.findAll(
      user,
      statusArray,
      startDate,
      endDate,
      limit,
      offset,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a payout by ID',
    description:
      'Returns detailed information about a specific payout, including its current status and provider details.',
  })
  @ApiParam({
    name: 'id',
    description: 'Payout UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Payout details',
    type: PayoutResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Payout not found or access denied',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
