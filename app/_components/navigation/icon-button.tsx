'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ICON_SVG_COMPONENTS, Theme } from './icon-components';

interface IconButtonProps {
  icon: Theme;
}

const IconButton = ({ icon }: IconButtonProps) => {
  const { theme, setTheme } = useTheme();
  const isActive = theme === icon;

  const Icon = ICON_SVG_COMPONENTS[icon].icon;
  const buttonLabel = ICON_SVG_COMPONENTS[icon].label;

  return (
    <div className="relative z-0 grid h-20 place-items-center">
      <button
        className={`h-[15px] w-[15px] rounded-full transition-colors duration-200 ${
          isActive ? 'text-slate-900 dark:text-slate-50' : 'text-slate-400'
        }`}
        aria-label={`Change to ${buttonLabel}`}
        onClick={() => setTheme(icon)}
      >
        <Icon />
      </button>
      {isActive ? (
        <motion.div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'var(--slate-200)',
            position: 'absolute'
          }}
          layout
          layoutId='circle'
        />
      ) : null}
    </div>
  );
};

export default IconButton; 