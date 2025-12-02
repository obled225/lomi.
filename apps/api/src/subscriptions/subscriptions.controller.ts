import { Controller, UseGuards, Get, Param, Patch, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { SubscriptionsService } from './subscriptions.service';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionResponseDto } from './dto/subscription-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('Subscriptions')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly service: SubscriptionsService) {}

  @Get()
  @ApiOperation({ summary: 'List all subscriptions' })
  @ApiResponse({
    status: 200,
    description: 'List of subscriptions',
    type: [SubscriptionResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a subscription by ID' })
  @ApiResponse({
    status: 200,
    description: 'The subscription',
    type: SubscriptionResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a subscription' })
  @ApiResponse({
    status: 200,
    description: 'The subscription has been successfully updated.',
    type: SubscriptionResponseDto,
  })
  update(@Param('id') id: string, @Body() updateDto: UpdateSubscriptionDto, @CurrentUser() user: AuthContext) {
    return this.service.update(id, updateDto, user);
  }
}
