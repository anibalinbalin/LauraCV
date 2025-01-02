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
    <div className="relative grid h-[20px] w-[20px] place-items-center">
      {isActive && (
        <motion.div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            position: 'absolute',
          }}
          className="bg-white dark:bg-gray-700"
          layout
          layoutId='circle'
        />
      )}
      <button
        className={`relative z-10 grid h-[20px] w-[20px] place-items-center transition-colors duration-200 ${
          isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
        }`}
        aria-label={`Change to ${buttonLabel}`}
        onClick={() => setTheme(icon)}
      >
        <Icon />
      </button>
    </div>
  );
};

export default IconButton; 