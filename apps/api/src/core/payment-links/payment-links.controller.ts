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
import { PaymentLinksService } from './payment-links.service';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';
import { PaymentLinkResponseDto } from './dto/payment-link-response.dto';
import { ApiKeyGuard } from '@/core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '@/core/common/decorators/current-user.decorator';

@ApiTags('Payment Links')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('payment-links')
export class PaymentLinksController {
  constructor(private readonly service: PaymentLinksService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new payment link',
    description:
      'Creates a shareable payment link. Can be for a specific product (product link) or a custom amount (instant link). Product links reference a product and optional price. Instant links have a fixed amount.',
  })
  @ApiResponse({
    status: 201,
    description: 'Payment link created successfully',
    type: PaymentLinkResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input or validation error',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  create(
    @Body() createDto: CreatePaymentLinkDto,
    @CurrentUser() user: AuthContext,
  ) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({
    summary: 'List all payment links',
    description:
      'Returns all payment links for your organization with pagination and optional filtering by type and active status.',
  })
  @ApiQuery({
    name: 'linkType',
    required: false,
    description: 'Filter by link type',
    enum: ['product', 'instant'],
  })
  @ApiQuery({
    name: 'isActive',
    required: false,
    description: 'Filter by active status',
    type: Boolean,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of results to return',
    type: Number,
    example: 20,
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
    description: 'List of payment links with pagination',
    type: [PaymentLinkResponseDto],
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findAll(
    @CurrentUser() user: AuthContext,
    @Query('linkType') linkType?: string,
    @Query('isActive') isActiveStr?: string,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit?: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset?: number,
  ) {
    const isActive =
      isActiveStr === 'true'
        ? true
        : isActiveStr === 'false'
          ? false
          : undefined;
    return this.service.findAll(user, linkType, isActive, limit, offset);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a payment link by ID',
    description:
      'Returns detailed information about a specific payment link, including its URL, configuration, and status.',
  })
  @ApiParam({
    name: 'id',
    description: 'Payment link UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Payment link details',
    type: PaymentLinkResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Payment link not found or access denied',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key',
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
