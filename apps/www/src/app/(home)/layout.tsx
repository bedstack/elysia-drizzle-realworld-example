import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const options = baseOptions();

  return (
    <HomeLayout
      {...options}
      nav={{
        ...options.nav,
        // Ensure nav is fully configured
      }}
    >
      {children}
    </HomeLayout>
  );
}
