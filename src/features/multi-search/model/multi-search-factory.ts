import {createEvent, createStore, restore, sample, split} from 'effector';
import {createFactory, invoke} from '@withease/factories';

import {ESearchType} from '../lib/types';

import {createCorpStrategyFactory} from './corp-strategy-factory';
import {createIndividualsStrategyFactory} from './individuals-strategy-factory';

export const createMultiSearchFactory = createFactory(() => {
  const {stores: corpStores, events: corpEvents} = invoke(createCorpStrategyFactory);
  const {stores: individualsStores, events: individualsEvents} = invoke(createIndividualsStrategyFactory);

  const onSearchValueChangedEvent = createEvent<string>();
  const onEnterPressedEvent = createEvent();
  const onChangeSearchType = createEvent<ESearchType>();

  const $searchValue = restore(onSearchValueChangedEvent, '');
  const $searchType = createStore(ESearchType.person);

  // При изменении типа поиска (Физические/Юридические лица) записать значение в store
  sample({
    clock: onChangeSearchType,
    target: $searchType,
  });

  // Разделение на стратегии поиска
  split({
    source: sample({
      clock: onEnterPressedEvent,
      source: {
        type: $searchType,
        query: $searchValue,
      },
    }),
    match: ({type}) => type,
    cases: {
      [ESearchType.corp]: corpEvents.onSearchChangedEvent,
      [ESearchType.person]: individualsEvents.onSearchChangedEvent,
    },
  });

  return {
    stores: {
      $searchType,
      $searchValue,
      ...corpStores,
      ...individualsStores,
    },

    events: {
      onEnterPressedEvent,
      onChangeSearchType,
      onSearchValueChangedEvent,
      ...corpEvents,
      ...individualsEvents,
    },
  };
});
