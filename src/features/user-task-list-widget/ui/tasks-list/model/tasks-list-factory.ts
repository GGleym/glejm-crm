import {createFactory} from '@withease/factories';
import {previous} from 'patronum';
import {createEvent, createStore, restore, sample, UnitValue} from 'effector';

import {TASKS} from './__MOCK__';
import {SORTING_STRATEGIES} from './consts';

export const createUserTaskListFactory = createFactory(() => {
  const $tasks = createStore(TASKS);

  const $previousTasks = previous($tasks);

  const onPriorityChangedEvent = createEvent<{sortParam: keyof UnitValue<typeof $tasks>[number]}>();

  const $sortParam = restore(
    onPriorityChangedEvent.map(({sortParam}) => sortParam),
    null,
  );

  sample({
    clock: onPriorityChangedEvent,
    source: {
      prevActivatedParam: $sortParam,
      previousTasks: $previousTasks,
      tasks: $tasks,
    },
    fn: ({tasks, prevActivatedParam, previousTasks}, {sortParam}) =>
      prevActivatedParam === sortParam && previousTasks
        ? previousTasks
        : tasks.slice().sort(SORTING_STRATEGIES[sortParam as keyof typeof SORTING_STRATEGIES]),
    target: $tasks,
  });

  return {
    stores: {
      $tasks,
    },

    events: {
      onPriorityChangedEvent,
    },
  };
});
