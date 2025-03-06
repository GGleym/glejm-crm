import {invoke} from '@withease/factories';

import {createMultiModalFactory} from './multi-modal-factory';

export const {events: multiModalEvents, stores: multiModalStores} = invoke(createMultiModalFactory);
