import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

import { SafeNavLink } from '@/components/safe-nav-link';

export function baseOptions(options?: {
  titleSuffix?: string;
  titleHref?: string;
}): BaseLayoutProps {
  return {
    nav: {
      transparentMode: 'top',
      title: (
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-mini.png"
              alt="Bedstack"
              width={30}
              height={28}
              className="hidden md:block"
              unoptimized
            />
            <Image
              src="/logo-mini.png"
              alt="Bedstack"
              width={26}
              height={24}
              className="md:hidden"
              unoptimized
            />
            <span className="font-medium text-lg">Bedstack</span>
          </div>
          {options?.titleSuffix && (
            <div className="flex items-center">
              <span className="text-muted-foreground/50 text-2xl font-extralight select-none leading-none -translate-y-0.5 ml-1.5 mr-1">
                /
              </span>
              <SafeNavLink
                href={options.titleHref ?? '/'}
                className="font-normal text-lg hover:text-foreground transition-colors"
              >
                {options.titleSuffix}
              </SafeNavLink>
            </div>
          )}
        </div>
      ),
    },
    githubUrl: 'https://github.com/yamcodes/bedstack',
    themeSwitch: {
      mode: 'light-dark-system',
    },
  };
}
