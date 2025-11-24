/* @proprietary license */

import { sync, type OramaDocument } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';
import { isAdmin, DataSourceId } from '@/lib/orama/client';

export async function updateSearchIndexes(): Promise<void> {
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY;

  if (!isAdmin) {
    console.log('Orama private key not found, skipping index update.');
    return;
  }

  const content = await fs.readFile('.next/server/app/static.json.body');
  const records = JSON.parse(content.toString()) as OramaDocument[];

  const manager = new CloudManager({ api_key: apiKey! });

  await sync(manager, {
    index: DataSourceId,
    documents: records,
  });

  console.log(`search updated: ${records.length} records`);
}
