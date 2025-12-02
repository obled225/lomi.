import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { PricesService } from './prices.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { PriceResponseDto } from './dto/price-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('Prices')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('prices')
export class PricesController {
  constructor(private readonly service: PricesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new price' })
  @ApiResponse({
    status: 201,
    description: 'The price has been successfully created.',
    type: PriceResponseDto,
  })
  create(@Body() createDto: CreatePriceDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all prices' })
  @ApiResponse({
    status: 200,
    description: 'List of prices',
    type: [PriceResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a price' })
  @ApiResponse({
    status: 200,
    description: 'The price',
    type: PriceResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
