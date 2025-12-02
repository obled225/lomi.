import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { RefundResponseDto } from './dto/refund-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

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
  create(@Body() createDto: CreateRefundDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all refunds' })
  @ApiResponse({
    status: 200,
    description: 'List of refunds',
    type: [RefundResponseDto],
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a refund' })
  @ApiResponse({
    status: 200,
    description: 'The refund',
    type: RefundResponseDto,
  })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
