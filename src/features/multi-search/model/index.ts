import {invoke} from '@withease/factories';

import {createMultiSearchFactory} from './multi-search-factory';

export const {stores, events} = invoke(createMultiSearchFactory);
