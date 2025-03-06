import {invoke} from '@withease/factories';

import {createUserTaskListWidgetFactory} from './user-task-list-widget-factory';

export * from './types';

export const {events, stores} = invoke(createUserTaskListWidgetFactory);
