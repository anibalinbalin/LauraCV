import { MoonIcon } from '@/components/icons/MoonIcon';
import { SunIcon } from '@/components/icons/SunIcon';

export type Theme = 'light' | 'dark';

export const ICON_SVG_COMPONENTS: Record<
  Theme,
  { label: string; icon: () => JSX.Element }
> = {
  dark: {
    label: 'dark theme',
    icon: () => <MoonIcon />,
  },
  light: {
    label: 'light theme',
    icon: () => <SunIcon />,
  },
}; 