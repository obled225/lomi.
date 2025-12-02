import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { DiscountCouponsService } from './discount-coupons.service';
import { CreateDiscountCouponDto } from './dto/create-discount-coupon.dto';
import { DiscountCouponResponseDto } from './dto/discount-coupon-response.dto';
import { ApiKeyGuard } from '@/core/common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '@/core/common/decorators/current-user.decorator';

@ApiTags('Discount Coupons')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('discount_coupons')
export class DiscountCouponsController {
  constructor(private readonly service: DiscountCouponsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new discount_coupon' })
  @ApiResponse({
    status: 201,
    description: 'The discount_coupon has been successfully created.',
    type: DiscountCouponResponseDto,
  })
  create(@Body() createDto: CreateDiscountCouponDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all discount_coupons' })
  @ApiResponse({
    status: 200,
    description: 'List of discount_coupons',
    type: [DiscountCouponResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a discount_coupon by ID' })
  @ApiResponse({
    status: 200,
    description: 'The discount_coupon',
    type: DiscountCouponResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
