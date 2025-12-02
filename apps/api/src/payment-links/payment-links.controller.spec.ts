import { Test, TestingModule } from '@nestjs/testing';
import { PaymentLinksController } from './payment-links.controller';
import { PaymentLinksService } from './payment-links.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

describe('PaymentLinksController', () => {
  let controller: PaymentLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentLinksController],
      providers: [
        {
          provide: PaymentLinksService,
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

    controller = module.get<PaymentLinksController>(PaymentLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
