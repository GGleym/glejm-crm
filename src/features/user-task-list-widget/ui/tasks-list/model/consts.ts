import {type Task} from './types';

export const SORTING_STRATEGIES = {
  priority: ({priority: aPriority}: Task) => (aPriority === 'high' ? -1 : 1),
};
