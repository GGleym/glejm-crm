import {Heading} from '@mtsbank/ui-kit';
import {CellText} from '@mtsdengi/uikit-fintech';

import {Flex} from '~/ui/flex';
import {getValueWithDashFallback} from '~/utils/getValuesWithDashFallback';

import {type FinConditionProps} from '../../lib/types';

export const FinancialCondition = ({monthIncome, expenses}: FinConditionProps) => (
  <>
    <Heading as="h4" fontWeight="medium" size="sm">
      Доходы и расходы
    </Heading>

    <Flex container columns={4} rowSpacing={1} columnSpacing={1}>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(monthIncome)} caption="Ежемесячный доход:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(expenses)} caption="Расходы:" />
      </Flex>
    </Flex>
  </>
);
