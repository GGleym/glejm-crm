import {createFactory} from '@withease/factories';
import {createEvent, createStore, sample} from 'effector';

import {Icon} from '@mtsdengi/uikit-fintech';

import {MENU_OPTIONS} from '~/ui/base-layout/model';
import {SearchStrategy} from '~/features/multi-search';

import {View} from '../lib/types';
import {spread} from 'patronum';
import {findIndividualsQuery} from '~/features/multi-search/model/api';

export const createMultiModalFactory = createFactory(() => {
  const onModalAddedEvent = createEvent<string>();
  const onModalRemovedEvent = createEvent<string>();
  const onModalActivatedEvent = createEvent<string>();

  const $modals = createStore<View[]>([
    {
      id: '1',
      icon: <Icon iconPath="granat/search/size-24-style-outline" />,
      content: <SearchStrategy />,
    },
  ]);
  const $currentModalId = createStore('1');

  // При срабатывании события onModalAddedEvent добавить вьюшку в store
  sample({
    clock: onModalAddedEvent,
    source: $modals,
    fn: (modals, modalId) => {
      const {label: title, content} = MENU_OPTIONS.find(({id: optionId}) => modalId === optionId) || {};

      const preparedModal = {
        title,
        content,
        id: modalId,
      };

      const modalsState = [...modals];

      modalsState.splice(modalsState.length - 2, 0, preparedModal);

      return {
        modalsState,
        currentModalId: modalId,
      };
    },
    target: spread({
      modalsState: $modals,
      currentModalId: $currentModalId,
    }),
  });

  // При срабатывании события onModalRemovedEvent удалить вьюшку из store
  sample({
    clock: onModalRemovedEvent,
    source: $modals,
    fn: (modals, modalId) => modals.filter((view) => view.id !== modalId),
    target: $modals,
  });

  // При срабатывании события onModalActivatedEvent
  // сохранить значение id в store currentModalId$
  sample({
    clock: onModalActivatedEvent,
    target: $currentModalId,
  });

  // При найденном пользователе перейти в карточку клиента
  // TODO: убрать в фабрику multi-search-factory.ts, так как сюда не относится данный семпл
  sample({
    clock: findIndividualsQuery.finished.success,
    fn: () => MENU_OPTIONS.find(({label}) => label === 'Клиенты')?.id ?? '',
    target: onModalAddedEvent,
  });

  return {
    events: {
      onModalAddedEvent,
      onModalRemovedEvent,
      onModalActivatedEvent,
    },

    stores: {
      $modals,
      $currentModalId,
    },
  };
});
