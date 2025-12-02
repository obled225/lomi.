import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryPayoutsService } from './beneficiary-payouts.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('BeneficiaryPayoutsService', () => {
  let service: BeneficiaryPayoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BeneficiaryPayoutsService,
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

    service = module.get<BeneficiaryPayoutsService>(BeneficiaryPayoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
