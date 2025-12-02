import { Test, TestingModule } from '@nestjs/testing';
import { WebhookDeliveryLogsService } from './webhook-delivery-logs.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('WebhookDeliveryLogsService', () => {
  let service: WebhookDeliveryLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebhookDeliveryLogsService,
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

    service = module.get<WebhookDeliveryLogsService>(
      WebhookDeliveryLogsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
