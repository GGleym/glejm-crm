import {invoke} from '@withease/factories';

import {createTaskOverlayFormFactory} from './create-task-overlay-form-factory';

export const {$taskOverlayForm} = invoke(createTaskOverlayFormFactory);
