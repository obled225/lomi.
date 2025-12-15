/**
 * BeneficiaryPayoutsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Beneficiary payouts - track individual payout transfers
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type BeneficiaryPayoutsRow = Database['public']['Tables']['beneficiary_payouts']['Row'];
type BeneficiaryPayoutsInsert = Database['public']['Tables']['beneficiary_payouts']['Insert'];
type BeneficiaryPayoutsUpdate = Database['public']['Tables']['beneficiary_payouts']['Update'];

export class BeneficiaryPayoutsService {

    /**
     * List beneficiary_payouts
     * Beneficiary payouts - track individual payout transfers
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<BeneficiaryPayoutsRow[]> {
        return await request<BeneficiaryPayoutsRow[]>({
            method: 'GET',
            url: '/beneficiary-payouts',
            query: options,
        });
    }

    /**
     * Get a single beneficiary_payout
     */
    public static async get(id: string): Promise<BeneficiaryPayoutsRow> {
        return await request<BeneficiaryPayoutsRow>({
            method: 'GET',
            url: '/beneficiary-payouts/{id}',
            path: { id },
        });
    }

    /**
     * Create a new beneficiary_payout
     */
    public static async create(data: BeneficiaryPayoutsInsert): Promise<BeneficiaryPayoutsRow> {
        return await request<BeneficiaryPayoutsRow>({
            method: 'POST',
            url: '/beneficiary-payouts',
            body: data,
        });
    }
}
