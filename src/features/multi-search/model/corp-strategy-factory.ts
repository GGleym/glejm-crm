import {createEvent, createStore, sample} from 'effector';
import {createFactory} from '@withease/factories';

import {findCompaniesByInnQuery} from './api';

export const createCorpStrategyFactory = createFactory(() => {
  const $companies = createStore([]);

  const onSearchChangedEvent = createEvent<{query: string}>();

  // При изменении значения поиска юридического лица отправить запрос за данными
  sample({
    clock: onSearchChangedEvent,
    target: findCompaniesByInnQuery.start,
  });

  return {
    stores: {
      $companies,
    },

    events: {
      onSearchChangedEvent,
    },
  };
});
