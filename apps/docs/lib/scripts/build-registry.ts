/* @proprietary license */

import { RegistryCompiler, writeFumadocsRegistry } from '@fumadocs/cli/build';
import { registry } from '@/components/preview/registry.mjs';

export async function buildRegistry() {
  const compiler = new RegistryCompiler(registry);
  const mainRegistry = await compiler.compile();

  await writeFumadocsRegistry(mainRegistry, {
    dir: 'public/registry',
  });
}
