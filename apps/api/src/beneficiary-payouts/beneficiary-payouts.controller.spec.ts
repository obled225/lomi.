import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryPayoutsController } from './beneficiary-payouts.controller';
import { BeneficiaryPayoutsService } from './beneficiary-payouts.service';

import { ApiKeyGuard } from '../common/guards/api-key.guard';

describe('BeneficiaryPayoutsController', () => {
  let controller: BeneficiaryPayoutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiaryPayoutsController],
      providers: [
        {
          provide: BeneficiaryPayoutsService,
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

    controller = module.get<BeneficiaryPayoutsController>(
      BeneficiaryPayoutsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
