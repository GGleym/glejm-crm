import {createFactory} from '@withease/factories';

import {createForm} from 'effector-forms';

export const createTaskOverlayFormFactory = createFactory(() => {
  const $taskOverlayForm = createForm({
    fields: {
      title: {
        init: '',
      },
      clientName: {
        init: 'Не выбран',
      },
      executor: {
        init: 'Не назначен',
      },
      priority: {
        init: 'Средний',
      },
      deadline: {
        init: 'дд.мм.гггг',
      },
      executionTime: {
        init: {from: 'с 00:00', to: 'до 00:00'},
      },
      location: {
        init: 'Не выбрано',
      },
      taskDescription: {
        init: '',
      },
    },
    validateOn: ['blur'],
  });

  return {
    $taskOverlayForm,
  };
});
