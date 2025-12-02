import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { RefundResponseDto } from './dto/refund-response.dto';
import { ApiKeyGuard } from '@/core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '@/core/common/decorators/current-user.decorator';

@ApiTags('Refunds')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('refunds')
export class RefundsController {
  constructor(private readonly service: RefundsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new refund' })
  @ApiResponse({
    status: 201,
    description: 'The refund has been successfully created.',
    type: RefundResponseDto,
  })
  create(@Body() createDto: CreateRefundDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all refunds' })
  @ApiResponse({
    status: 200,
    description: 'List of refunds',
    type: [RefundResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a refund by ID' })
  @ApiResponse({
    status: 200,
    description: 'The refund',
    type: RefundResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
