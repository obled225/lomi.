import { Test, TestingModule } from '@nestjs/testing';
import { WebhookSenderService, Webhook } from './webhook-sender.service';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WebhookSenderService', () => {
  let service: WebhookSenderService;

  const mockSupabaseClient = {
    rpc: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebhookSenderService,
        {
          provide: SupabaseService,
          useValue: {
            getClient: jest.fn(() => mockSupabaseClient),
          },
        },
      ],
    }).compile();

    service = module.get<WebhookSenderService>(WebhookSenderService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('sendWebhook', () => {
    const webhook: Webhook = {
      id: 'wh_123',
      url: 'https://example.com/webhook',
      events: ['PAYMENT_SUCCEEDED'],
      secret: 'secret_123',
      active: true,
      organization_id: 'org_123',
    };
    const event = 'PAYMENT_SUCCEEDED';
    const data = { id: 'tx_123' };

    it('should send webhook successfully', async () => {
      mockedAxios.post.mockResolvedValue({ status: 200, data: 'OK' });
      mockSupabaseClient.rpc.mockResolvedValue({ data: null, error: null });

      const result = await service.sendWebhook(webhook, event, data);

      expect(result).toBe(true);
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith(
        webhook.url,
        expect.any(String),
        expect.objectContaining({
          headers: expect.objectContaining({
            'X-Lomi-Event': event,
            'X-Lomi-Signature': expect.any(String),
          }),
        }),
      );
      expect(mockSupabaseClient.rpc).toHaveBeenCalledWith(
        'log_webhook_delivery',
        expect.objectContaining({
          p_webhook_id: webhook.id,
          p_response_status: 200,
        }),
      );
    });

    it('should retry on failure', async () => {
      mockedAxios.post
        .mockRejectedValueOnce({ response: { status: 500 } })
        .mockResolvedValueOnce({ status: 200, data: 'OK' });
      mockSupabaseClient.rpc.mockResolvedValue({ data: null, error: null });

      const result = await service.sendWebhook(webhook, event, data, 1, 10); // 1 retry, 10ms delay

      expect(result).toBe(true);
      expect(mockedAxios.post).toHaveBeenCalledTimes(2);
    });

    it('should fail after max retries', async () => {
      mockedAxios.post.mockRejectedValue({ response: { status: 500 } });
      mockSupabaseClient.rpc.mockResolvedValue({ data: null, error: null });

      const result = await service.sendWebhook(webhook, event, data, 1, 10);

      expect(result).toBe(false);
      expect(mockedAxios.post).toHaveBeenCalledTimes(2); // Initial + 1 retry
      expect(mockSupabaseClient.rpc).toHaveBeenCalledWith(
        'log_webhook_delivery',
        expect.objectContaining({
          p_response_status: 500,
        }),
      );
    });

    it('should not send if webhook is inactive', async () => {
      const inactiveWebhook = { ...webhook, active: false };
      const result = await service.sendWebhook(inactiveWebhook, event, data);
      expect(result).toBe(false);
      expect(mockedAxios.post).not.toHaveBeenCalled();
    });

    it('should not send if event is not subscribed', async () => {
      const result = await service.sendWebhook(webhook, 'PAYMENT_FAILED', data);
      expect(result).toBe(false);
      expect(mockedAxios.post).not.toHaveBeenCalled();
    });
  });
});
