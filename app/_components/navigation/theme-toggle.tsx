'use client';

import { LayoutGroup } from 'framer-motion';
import { ICON_SVG_COMPONENTS, Theme } from './icon-components';
import dynamic from 'next/dynamic';

const IconButton = dynamic(() => import('./icon-button'), {
  ssr: false,
  loading: () => <div className="h-5 w-5 rounded-full bg-slate-200" />,
});

const ThemeToggle = () => {
  return (
    <div className="grid h-[30px] w-[65px] grid-cols-[repeat(2,20px)] place-items-center gap-[5px] rounded-full bg-slate-100 dark:bg-slate-800">
      <LayoutGroup>
        {Object.keys(ICON_SVG_COMPONENTS).map((key) => (
          <IconButton key={key} icon={key as Theme} />
        ))}
      </LayoutGroup>
    </div>
  );
};

export default ThemeToggle; 