import {FlexOmitProps} from './types';

export const DEFAULT_COLUMNS = 12;
export const DEFAULT_SPACING = 16;

export const INITIAL_BREAKPOINTS = {
  $sm: 1024,
  $md: 1280,
  $lg: 1440,
  $xl: 1800,
} as const;

export const SIZE_TYPES: {
  [K in keyof typeof INITIAL_BREAKPOINTS]: K;
} = {
  $sm: '$sm',
  $md: '$md',
  $lg: '$lg',
  $xl: '$xl',
} as const;

export const DEFAULT_PROPS: FlexOmitProps = {
  $wrap: 'wrap',
  $md: 'auto',
} as const;
