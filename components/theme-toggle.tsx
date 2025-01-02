"use client"

import { LayoutGroup } from 'framer-motion';
import { ICON_SVG_COMPONENTS, Theme } from './navigation/icon-components';
import dynamic from 'next/dynamic';

const IconButton = dynamic(() => import('./navigation/icon-button'), {
  ssr: false,
  loading: () => <div className="h-5 w-5 rounded-full bg-slate-200" />,
});

export function ThemeToggle() {
  return (
    <div className="grid h-[32px] w-[64px] grid-cols-2 place-items-center rounded-full bg-gray-100/40 p-1.5 dark:bg-gray-800/40">
      <LayoutGroup>
        {Object.keys(ICON_SVG_COMPONENTS).map((key) => (
          <IconButton key={key} icon={key as Theme} />
        ))}
      </LayoutGroup>
    </div>
  );
} 