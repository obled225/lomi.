/* @proprietary license */

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
  const records = JSON.parse(content.toString()) as unknown[];

  const manager = new CloudManager({ api_key: apiKey! });
  const index = manager.index(DataSourceId);

  // Insert documents in batches to avoid overwhelming the API
  const batchSize = 100;
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    await index.insert(batch);
  }

  // Deploy the changes
  await index.deploy();

  console.log(`search updated: ${records.length} records`);
}
