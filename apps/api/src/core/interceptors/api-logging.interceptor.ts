import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SupabaseService } from '../../utils/supabase/supabase.service';

@Injectable()
export class ApiLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ApiLoggingInterceptor.name);

  constructor(private readonly supabase: SupabaseService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: (data) => {
          void this.logInteraction(
            context,
            request,
            data,
            Date.now() - now,
            context.switchToHttp().getResponse().statusCode,
          );
        },
        error: (error) => {
          void this.logInteraction(
            context,
            request,
            { error: error.message },
            Date.now() - now,
            error.status || 500,
          );
        },
      }),
    );
  }

  private async logInteraction(
    context: ExecutionContext,
    request: any,
    responseBody: any,
    durationMs: number,
    statusCode: number,
  ) {
    try {
      const user = request.user;

      const apiKey =
        request.headers['x-api-key'] ||
        (request.headers.authorization &&
        request.headers.authorization.startsWith('Bearer ')
          ? request.headers.authorization.substring(7)
          : null);

      if (user && user.organizationId && apiKey) {
        // Cast to any because the types are not yet generated for the new RPC
        const rpcName = 'log_api_interaction' as any;

        // Don't await this to avoid blocking the response
        this.supabase
          .rpc(rpcName, {
            p_organization_id: user.organizationId,
            p_api_key: apiKey,
            p_endpoint: urlWithoutQuery(request.url),
            p_request_method: request.method,
            p_request_payload: request.body ? request.body : {},
            p_response_status: statusCode,
            p_response_payload: responseBody ? responseBody : {},
            p_response_time: durationMs,
          })
          .then(({ error }) => {
            if (error) {
              this.logger.error(
                `Failed to log API interaction: ${error.message}`,
                error,
              );
            }
          })
          .catch((err) => {
            this.logger.error(
              `Exception logging API interaction: ${err.message}`,
              err,
            );
          });
      } else {
        // Debug log why logging was skipped (useful for troubleshooting)
        if (apiKey && !user) {
          this.logger.warn(
            `Skipping API log: API key present but no user/org context. ApiKeyGuard might not have run or failed silently.`,
          );
        } else if (user && !apiKey) {
          // Internal calls might have user but no API key header, which is fine to skip
        }
      }
    } catch (e) {
      this.logger.error(`Error in ApiLoggingInterceptor: ${e.message}`, e);
    }
  }
}

function urlWithoutQuery(url: string): string {
  return url.split('?')[0];
}
