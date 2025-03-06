import {invoke} from '@withease/factories';

import {createClientsFactory} from './clients-factory';

export * from './__MOCK__';

export const {$clientsGate, stores} = invoke(createClientsFactory);
