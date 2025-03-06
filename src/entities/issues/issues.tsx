import {useUnit} from 'effector-react';

import {Button, Flex, granatLightTheme, Icon, Input, Spacer} from '@mtsdengi/uikit-fintech';

import {Table} from '~/kit/ui/table';

import {LOAN_APPLICATIONS_COLUMNS} from './model/consts';
import {prepareLoanApplicationsData} from './model/utils';

import {stores} from './model';
import {Styled} from './styled';

export const Issues = () => {
  const loanApplications = useUnit(stores.$loanApplications);

  return (
    <Styled.Container>
      <Flex justifyContent="space-between" alignItems="center" gap={granatLightTheme.spacings.s16}>
        <Input iconStart={<Icon iconPath="granat/search/size-16-style-outline" />} placeholder="Номер заявки" />
        <Button
          variant="secondary-inverted"
          size={44}
          icon={<Icon iconPath="granat/filter-alternative/size-16-style-outline" />}
        >
          Фильтры
        </Button>
      </Flex>

      <Spacer space="s24" />

      <Table
        hasBorder={false}
        bodyHeight={820}
        columns={LOAN_APPLICATIONS_COLUMNS}
        data={prepareLoanApplicationsData(loanApplications)}
      />
    </Styled.Container>
  );
};
