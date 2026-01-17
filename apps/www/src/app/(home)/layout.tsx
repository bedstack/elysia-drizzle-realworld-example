import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions()} 
    links: [
      {
        text: 'Guide',
        url: '/docs/what-is-bedstack',
        active: 'nested-url',
      },
      {
        text: 'RealWorld apps',
        url: 'https://realworld-docs.netlify.app/',
        external: true,
      },
      {
        text: 'GitHub',
        url: 'https://github.com/yamcodes/bedstack',
        external: true,
      },
    ],>{children}</HomeLayout>;
}
