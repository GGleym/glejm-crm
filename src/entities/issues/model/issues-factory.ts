import {createFactory} from '@withease/factories';
import {isNullable} from '@mtsdengi/uikit-fintech';

import {getLoanApplicationsQuery} from './api';

export const createIssuesFactory = createFactory(() => {
  const $loanApplications = getLoanApplicationsQuery.$data.map((data) => {
    if (isNullable(data) || isNullable(data?.applicationMain)) {
      return [];
    }

    return data.applicationMain;
  });

  return {
    stores: {
      $loanApplications,
    },
  };
});
