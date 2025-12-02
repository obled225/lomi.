import { Test, TestingModule } from '@nestjs/testing';
import { DiscountCouponsService } from './discount-coupons.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('DiscountCouponsService', () => {
  let service: DiscountCouponsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DiscountCouponsService,
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

    service = module.get<DiscountCouponsService>(DiscountCouponsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
