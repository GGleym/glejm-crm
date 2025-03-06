import {invoke} from '@withease/factories';

import {createServicePackagesFactory} from './service-packages-factory';

export const {stores} = invoke(createServicePackagesFactory);
