import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../types/api';

type DatabaseFunctions = Database['public']['Functions'];

@Injectable()
export class SupabaseService implements OnModuleInit {
  private client: SupabaseClient<Database>;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const supabaseUrl =
      this.configService.get<string>('VITE_SUPABASE_URL') ||
      process.env.VITE_SUPABASE_URL;
    const supabaseKey =
      this.configService.get<string>('VITE_SUPABASE_ANON_KEY') ||
      process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL or Key is missing! Check your .env file.');
    }

    this.client = createClient<Database>(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  getClient(): SupabaseClient<Database> {
    return this.client;
  }

  /**
   * Typed RPC helper method that properly infers function arguments and return types
   */
  async rpc<FnName extends keyof DatabaseFunctions>(
    fnName: FnName,
    args: DatabaseFunctions[FnName]['Args'],
  ): Promise<{
    data: DatabaseFunctions[FnName]['Returns'] | null;
    error: Error | null;
  }> {
    const { data, error } = await this.client.rpc(
      fnName as string,
      args as never,
    );
    return {
      data: data as DatabaseFunctions[FnName]['Returns'] | null,
      error,
    };
  }

  /**
   * Typed table helper that returns a properly typed query builder
   */
  from<TableName extends keyof Database['public']['Tables']>(
    table: TableName,
  ): ReturnType<SupabaseClient<Database>['from']> {
    return this.client.from(table) as ReturnType<SupabaseClient<Database>['from']>;
  }
}
