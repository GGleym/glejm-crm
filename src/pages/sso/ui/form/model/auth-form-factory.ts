import {createFactory} from '@withease/factories';
import {createForm} from 'effector-forms';

export const createAuthFormFactory = createFactory(() => {
  const $authForm = createForm({
    fields: {
      username: {
        init: '',
      },
      password: {
        init: '',
      },
    },
  });

  return {
    $authForm,
  };
});
