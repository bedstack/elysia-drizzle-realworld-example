'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export function SafeNavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <span
      role="link"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(href);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          router.push(href);
        }
      }}
      className={className}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </span>
  );
}
