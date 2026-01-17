import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  const options = baseOptions();

  return (
    <DocsLayout
      tree={source.pageTree}
      {...options}
      sidebar={{ collapsible: false }}
      nav={{ ...options.nav, mode: 'top' as any }}
      containerProps={{
        className: 'max-w-[1400px] mx-auto w-full',
      }}
    >
      {children}
    </DocsLayout>
  );
}
