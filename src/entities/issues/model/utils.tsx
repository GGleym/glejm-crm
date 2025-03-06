import {format} from 'date-fns';
import {ru} from 'date-fns/locale/ru';

import {granatLightTheme, Text} from '@mtsdengi/uikit-fintech';

import {BadgeStatus} from '~/kit/ui/status-badge/model/types';
import {StatusBadge} from '~/kit/ui/status-badge';

import {LoanApplicationStatus, type ShortApplication} from './types';

const LOAN_STATUSES_TO_BADGE: Partial<Record<LoanApplicationStatus, BadgeStatus>> = {
  [LoanApplicationStatus.NEW]: BadgeStatus.NEW,
  [LoanApplicationStatus.IN_PROCESS]: BadgeStatus.PROCESS,
  [LoanApplicationStatus.COMPLETE]: BadgeStatus.COMPLETE,
  [LoanApplicationStatus.BANK_REJECT]: BadgeStatus.REJECT,
  [LoanApplicationStatus.CLIENT_CANCEL]: BadgeStatus.CANCEL,
  [LoanApplicationStatus.DRAFT]: BadgeStatus.DRAFT,
};

export const mapStatusToBadge = (status: LoanApplicationStatus) =>
  LOAN_STATUSES_TO_BADGE[status] ?? BadgeStatus.DEFAULT;

export const prepareLoanApplicationsData = (application: ShortApplication[]) =>
  application.map(({statusCode, status, stage, createDate, ...restValues}) => ({
    ...restValues,
    createDate: format(createDate, 'dd.MM.yyyy HH:mm:ss', {locale: ru}),
    status: (
      <>
        <StatusBadge status={mapStatusToBadge(statusCode)}>{status}</StatusBadge>
        <Text font="p4RegularComp" color={granatLightTheme.colors.text.secondary}>
          {stage}
        </Text>
      </>
    ),
  }));
