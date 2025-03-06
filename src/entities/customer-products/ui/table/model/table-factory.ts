import {createEvent} from 'effector';
import {createFactory} from '@withease/factories';

export const createTableFactory = createFactory(() => {
  const selectAll = createEvent();
  const selectRow = createEvent();

  return {
    events: {
      selectAll,
      selectRow,
    },
  };
});
