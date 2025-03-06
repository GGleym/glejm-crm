import {CellText} from '@mtsdengi/uikit-fintech';
import {Heading} from '@mtsbank/ui-kit';

import {Flex} from '~/ui/flex';
import {getValueWithDashFallback} from '~/utils/getValuesWithDashFallback';

import {type DocumentsProps} from '../../lib/types';

export const Documents = ({documentType, series, number, issueDate, issueCode, issueOrgName}: DocumentsProps) => (
  <>
    <Heading as="h4" fontWeight="medium" size="sm">
      Основной документ
    </Heading>

    <Flex container columns={4} rowSpacing={1} columnSpacing={1.5}>
      <Flex col xs={1}>
        <CellText
          reverse
          label={getValueWithDashFallback(Array.isArray(documentType) ? documentType[0] : documentType)}
          caption="Тип документа:"
        />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(series)} caption="Серия:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(number)} caption="Номер:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(issueDate)} caption="Дата выдачи:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(issueCode)} caption="Код подразделения:" />
      </Flex>
      <Flex col xs={3}>
        <CellText reverse label={getValueWithDashFallback(issueOrgName)} caption="Кем выдан:" />
      </Flex>
    </Flex>

    {Array.isArray(documentType) && (
      <>
        <Heading as="h4" fontWeight="medium" size="sm">
          Дополнительные документы
        </Heading>

        <Flex container columns={4} rowSpacing={1} columnSpacing={1.5}>
          <Flex col xs={1}>
            <CellText
              reverse
              label={getValueWithDashFallback(Array.isArray(documentType) ? documentType[0] : documentType)}
              caption="Тип документа:"
            />
          </Flex>
          <Flex col xs={3}>
            <CellText reverse label={getValueWithDashFallback(series)} caption="Серия:" />
          </Flex>
          <Flex col xs={1}>
            <CellText reverse label={getValueWithDashFallback(number)} caption="Номер:" />
          </Flex>
          <Flex col xs={1}>
            <CellText reverse label={getValueWithDashFallback(issueDate)} caption="Дата выдачи:" />
          </Flex>
          <Flex col xs={1}>
            <CellText reverse label={getValueWithDashFallback(issueCode)} caption="Код подразделения:" />
          </Flex>
          <Flex col xs={3}>
            <CellText reverse label={getValueWithDashFallback(issueOrgName)} caption="Кем выдан:" />
          </Flex>
        </Flex>
      </>
    )}
  </>
);
