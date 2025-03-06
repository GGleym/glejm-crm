import {invoke} from '@withease/factories';

import {createAuthFactory} from './auth-factory';

export const {$authForm, events, stores} = invoke(createAuthFactory);
