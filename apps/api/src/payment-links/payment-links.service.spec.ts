import { Test, TestingModule } from '@nestjs/testing';
import { PaymentLinksService } from './payment-links.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('PaymentLinksService', () => {
  let service: PaymentLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentLinksService,
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

    service = module.get<PaymentLinksService>(PaymentLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
