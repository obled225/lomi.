import { Test, TestingModule } from '@nestjs/testing';
import { CustomerInvoicesController } from './customer-invoices.controller';
import { CustomerInvoicesService } from './customer-invoices.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

describe('CustomerInvoicesController', () => {
  let controller: CustomerInvoicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerInvoicesController],
      providers: [
        {
          provide: CustomerInvoicesService,
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

    controller = module.get<CustomerInvoicesController>(
      CustomerInvoicesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
