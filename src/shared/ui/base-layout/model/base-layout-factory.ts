import {createEvent, createStore, sample} from 'effector';
import {createQuery} from '@farfetched/core';
import {createFactory} from '@withease/factories';

import {INSET_LIST} from './__MOCK__/inset-list';

export const createBaseLayoutFactory = createFactory(() => {
  const $insets = createStore<(typeof INSET_LIST)[number][]>([]);

  const $workingTab = createStore<string | null>(null);

  const initialized = createEvent();
  const destroyed = createEvent();

  const getInsetListQuery = createQuery({
    handler: async () => INSET_LIST,
  });

  $insets.reset(destroyed);

  sample({
    clock: initialized,
    target: getInsetListQuery.start,
  });

  sample({
    clock: getInsetListQuery.finished.success,
    fn: ({result}) => result,
    target: $insets,
  });

  return {
    stores: {
      $insets,
      $pending: getInsetListQuery.$pending,
      $failed: getInsetListQuery.$failed,
      $workingTab,
    },

    events: {
      initialized,
      destroyed,
    },
  };
});
