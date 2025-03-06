import {type Nullable} from '../types';

export const getValueWithDashFallback = (value?: Nullable<string | number>) => {
  if (typeof value === 'number') {
    return value.toString();
  }

  return value || '-';
};
