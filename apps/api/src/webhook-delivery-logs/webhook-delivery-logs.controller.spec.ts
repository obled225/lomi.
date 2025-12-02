import { Test, TestingModule } from '@nestjs/testing';
import { WebhookDeliveryLogsController } from './webhook-delivery-logs.controller';
import { WebhookDeliveryLogsService } from './webhook-delivery-logs.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

describe('WebhookDeliveryLogsController', () => {
  let controller: WebhookDeliveryLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookDeliveryLogsController],
      providers: [
        {
          provide: WebhookDeliveryLogsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    })
      .overrideGuard(ApiKeyGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<WebhookDeliveryLogsController>(
      WebhookDeliveryLogsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
