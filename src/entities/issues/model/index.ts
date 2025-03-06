import {invoke} from '@withease/factories';

import {createIssuesFactory} from './issues-factory';

export const {stores} = invoke(createIssuesFactory);
