/* @proprietary license */

'use client';

import { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

export function Mermaid({ chart }: { chart: string }) {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let active = true;

    const renderChart = async () => {
      try {
        const mermaid = (await import('mermaid')).default;

        if (!active) return;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          fontFamily: 'inherit',
          themeCSS: 'margin: 1.5rem auto 0;',
          theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        });

        const { svg } = await mermaid.render(
          id.replace(/:/g, ''),
          chart.replaceAll('\\n', '\n'),
        );

        if (active) {
          setSvg(svg);
        }
      } catch (error) {
        console.error('Failed to render mermaid chart:', error);
      }
    };

    renderChart();

    return () => {
      active = false;
    };
  }, [chart, resolvedTheme, id]);

  if (!svg) return null;

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}
