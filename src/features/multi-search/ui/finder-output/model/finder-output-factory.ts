import {createEvent, sample} from 'effector';
import {debounce} from 'patronum';
import {createFactory} from '@withease/factories';
import {getPartiesQuery} from './api';

export const createFinderOutputFactory = createFactory(() => {
  const onFilledEvent = createEvent<string>();

  sample({
    clock: debounce(onFilledEvent, 1000),
    fn: (query) => ({query}),
    target: getPartiesQuery.start,
  });

  return {
    events: {
      onFilledEvent,
    },
  };
});
