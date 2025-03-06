import {useMemo} from 'react';

import {objectKeys} from '@mtsdengi/uikit-fintech';

import {useViewportSize} from '~/hooks/use-viewport-size';

import {INITIAL_BREAKPOINTS} from './consts';
import type {Size} from './types';

export const useBreakpoints = (breakpoints: Record<Size, number> = INITIAL_BREAKPOINTS) => {
  const [width] = useViewportSize();

  const viewports = useMemo(() => {
    const units = objectKeys(breakpoints);

    return units.reduce<Record<Size, boolean>>(
      (acc, unit) => {
        acc[unit] = width >= breakpoints[unit];
        return acc;
      },
      {} as Record<Size, boolean>,
    );
  }, [breakpoints, width]);

  return viewports;
};
