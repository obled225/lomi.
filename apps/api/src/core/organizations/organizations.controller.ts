import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { OrganizationsService } from './organizations.service';
import { OrganizationResponseDto } from './dto/organization-response.dto';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '@core/common/decorators/current-user.decorator';

@ApiTags('Organizations')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly service: OrganizationsService) {}

  @Get()
  @ApiOperation({ summary: 'List all organizations' })
  @ApiResponse({
    status: 200,
    description: 'List of organizations',
    type: [OrganizationResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a organization by ID' })
  @ApiResponse({
    status: 200,
    description: 'The organization',
    type: OrganizationResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
