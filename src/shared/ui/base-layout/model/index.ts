import {invoke} from '@withease/factories';
import {createGate} from 'effector-react';
import {sample} from 'effector';

import {createBaseLayoutFactory} from './base-layout-factory';

export {MENU_OPTIONS} from './constants';
export const BaseLayoutGate = createGate();

export const {stores, events} = invoke(createBaseLayoutFactory);

sample({
  clock: BaseLayoutGate.open,
  target: events.initialized,
});

sample({
  clock: BaseLayoutGate.close,
  target: events.destroyed,
});
