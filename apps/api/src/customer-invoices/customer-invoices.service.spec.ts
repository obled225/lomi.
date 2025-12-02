import { Test, TestingModule } from '@nestjs/testing';
import { CustomerInvoicesService } from './customer-invoices.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('CustomerInvoicesService', () => {
  let service: CustomerInvoicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerInvoicesService,
        {
          provide: SupabaseService,
          useValue: {
            getClient: jest.fn(() => ({
              from: jest.fn(() => ({
                select: jest.fn(() => ({
                  single: jest.fn(),
                  eq: jest.fn(() => ({ single: jest.fn() })),
                })),
                insert: jest.fn(() => ({
                  select: jest.fn(() => ({ single: jest.fn() })),
                })),
              })),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<CustomerInvoicesService>(CustomerInvoicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
