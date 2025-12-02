import { Test, TestingModule } from '@nestjs/testing';
import { DiscountCouponsController } from './discount-coupons.controller';
import { DiscountCouponsService } from './discount-coupons.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

describe('DiscountCouponsController', () => {
  let controller: DiscountCouponsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountCouponsController],
      providers: [
        {
          provide: DiscountCouponsService,
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

    controller = module.get<DiscountCouponsController>(
      DiscountCouponsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
