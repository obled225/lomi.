import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutSessionsController } from './checkout-sessions.controller';
import { CheckoutSessionsService } from './checkout-sessions.service';

import { ApiKeyGuard } from '../common/guards/api-key.guard';

describe('CheckoutSessionsController', () => {
  let controller: CheckoutSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckoutSessionsController],
      providers: [
        {
          provide: CheckoutSessionsService,
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

    controller = module.get<CheckoutSessionsController>(
      CheckoutSessionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
