import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksService } from './webhooks.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

describe('WebhooksService', () => {
  let service: WebhooksService;
  let supabaseService: SupabaseService;

  const mockSupabaseClient = {
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebhooksService,
        {
          provide: SupabaseService,
          useValue: {
            getClient: jest.fn(() => mockSupabaseClient),
          },
        },
      ],
    }).compile();

    service = module.get<WebhooksService>(WebhooksService);
    supabaseService = module.get<SupabaseService>(SupabaseService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a webhook', async () => {
      const createDto: CreateWebhookDto = {
        url: 'https://example.com/webhook',
        authorized_events: 'payment.succeeded',
      } as any;
      const user: AuthContext = { organizationId: 'org_123' } as any;
      const expectedResult = { id: 'wh_123', ...createDto };

      mockSupabaseClient.single.mockResolvedValue({ data: expectedResult, error: null });

      const result = await service.create(createDto, user);

      expect(supabaseService.getClient).toHaveBeenCalled();
      expect(mockSupabaseClient.from).toHaveBeenCalledWith('webhooks');
      expect(mockSupabaseClient.insert).toHaveBeenCalledWith({
        ...createDto,
        organization_id: user.organizationId,
      });
      expect(result).toEqual(expectedResult);
    });

    it('should throw error if creation fails', async () => {
      const createDto: CreateWebhookDto = { url: 'https://example.com' } as any;
      const user: AuthContext = { organizationId: 'org_123' } as any;
      const error = { message: 'DB Error' };

      mockSupabaseClient.single.mockResolvedValue({ data: null, error });

      await expect(service.create(createDto, user)).rejects.toThrow('DB Error');
    });
  });

  describe('findAll', () => {
    it('should return all webhooks for organization', async () => {
      const user: AuthContext = { organizationId: 'org_123' } as any;
      const expectedResult = [{ id: 'wh_123' }];

      // select should return 'this' (the builder), not the result yet
      mockSupabaseClient.select.mockReturnValue(mockSupabaseClient);
      // eq should return the result promise
      mockSupabaseClient.eq.mockResolvedValue({ data: expectedResult, error: null });

      const result = await service.findAll(user);

      expect(mockSupabaseClient.from).toHaveBeenCalledWith('webhooks');
      expect(mockSupabaseClient.select).toHaveBeenCalledWith('*');
      expect(mockSupabaseClient.eq).toHaveBeenCalledWith('organization_id', user.organizationId);
      expect(result).toEqual(expectedResult);
    });
  });
});
