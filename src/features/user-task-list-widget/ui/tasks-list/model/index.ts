import {invoke} from '@withease/factories';

import {createUserTaskListFactory} from './tasks-list-factory';

export * from './__MOCK__';

export const {stores, events} = invoke(createUserTaskListFactory);
