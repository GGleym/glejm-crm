import {invoke} from '@withease/factories';
import {createFinderOutputFactory} from './finder-output-factory';

export const {events} = invoke(createFinderOutputFactory);
