import {createEvent, sample} from 'effector';
import {createFactory} from '@withease/factories';

import {findIndividualsQuery} from './api';

export const createIndividualsStrategyFactory = createFactory(() => {
  const onSearchChangedEvent = createEvent<{query: string}>();

  // При изменении значения поиска физического лица отправить запрос за данными
  sample({
    clock: onSearchChangedEvent,
    fn: ({query}) => ({query}),
    target: findIndividualsQuery.start,
  });

  return {
    events: {
      onSearchChangedEvent,
    },

    stores: {
      $pending: findIndividualsQuery.$pending,
    },
  };
});
