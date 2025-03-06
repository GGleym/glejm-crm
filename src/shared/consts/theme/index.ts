import {fonts} from './fonts';

export const theme = {
  fonts,
  breakpoints: {
    none: 0,
    mob: 320,
    mobLg: 600,
    tablet: 736,
    sm: 1024,
    md: 1280,
    lg: 1440,
    uber: 1800,
  },
  spacings: {
    xs5: 2,
    xs4: 4,
    xs3: 8,
    xs2: 12,
    xs: 16,
    sm: 24,
    md: 32,
    lg: 40,
    xl: 52,
    xl2: 64,
    xl3: 80,
    xl4: 96,
  },
} as const;
