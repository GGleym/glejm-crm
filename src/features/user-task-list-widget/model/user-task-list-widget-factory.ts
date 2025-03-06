import {createApi, createEvent, createStore, restore} from 'effector';
import {createFactory, invoke} from '@withease/factories';

import {createKanbanFactory} from './kanban-factory';

export const createUserTaskListWidgetFactory = createFactory(() => {
  const {events: kanbanEvents, stores: kanbanStores} = invoke(createKanbanFactory);
  const onTasksViewChangedEvent = createEvent<'kanban' | 'list'>();
  const $isTaskModalOpened = createStore(false);

  const {onOpenTaskModalEvent, onCloseTaskModalEvent} = createApi($isTaskModalOpened, {
    onOpenTaskModalEvent: () => true,
    onCloseTaskModalEvent: () => false,
  });

  const $taskView = restore(onTasksViewChangedEvent, 'kanban');

  return {
    events: {
      onTasksViewChangedEvent,
      onOpenTaskModalEvent,
      onCloseTaskModalEvent,
      ...kanbanEvents,
    },

    stores: {
      $taskView,
      $isTaskModalOpened,
      ...kanbanStores,
    },
  };
});
