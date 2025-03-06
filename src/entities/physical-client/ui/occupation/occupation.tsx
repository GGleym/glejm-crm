import {Heading} from '@mtsbank/ui-kit';
import {CellText} from '@mtsdengi/uikit-fintech';

import {Flex} from '~/ui/flex';
import {getValueWithDashFallback} from '~/utils/getValuesWithDashFallback';

import {type OccupationProps} from '../../lib/types';

export const Occupation = ({
  employmentType,
  position,
  positionLevel,
  hireDate,
  clientActivitySphere,
  clientActivitySphereOther,
  totalExperience,
  currentFieldExperience,
  shortName,
  organizationName,
  inn,
  organizationActivity,
  organizationEmail,
  companySize,
  ownershipType,
  branchAffiliation,
  companyAffiliation,
  legalForm,
  legalAddress,
  actualAddress,
}: OccupationProps) => (
  <>
    <Heading as="h4" fontWeight="medium" size="sm">
      Сведения о занятости
    </Heading>

    <Flex container columns={3} rowSpacing={1} columnSpacing={1.5}>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(employmentType)} caption="Основной вид занятости:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(position)} caption="Должность:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(positionLevel)} caption="Уровень должности:" />
      </Flex>

      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(hireDate)} caption="Дата приёма на работу:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(clientActivitySphere)} caption="Сфера занятий клиента:" />
      </Flex>
      <Flex col xs={1}>
        <CellText
          reverse
          label={getValueWithDashFallback(clientActivitySphereOther)}
          caption="Сфера занятий клиента (другое):"
        />
      </Flex>

      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(totalExperience)} caption="Общий трудовой стаж:" />
      </Flex>
      <Flex col xs={2}>
        <CellText
          reverse
          label={getValueWithDashFallback(currentFieldExperience)}
          caption="Стаж работы в текущей сфере деятельности:"
        />
      </Flex>

      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(shortName)} caption="Краткое наименование:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(organizationName)} caption="Наименование организации:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(inn)} caption="ИНН:" />
      </Flex>

      <Flex col xs={1}>
        <CellText
          reverse
          label={getValueWithDashFallback(organizationActivity)}
          caption="Сфера деятельности организации:"
        />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(organizationEmail)} caption="E-mail организации:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(companySize)} caption="Размер компании:" />
      </Flex>

      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(ownershipType)} caption="Вид собственности:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(branchAffiliation)} caption="Отделение привязки:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(companyAffiliation)} caption="Принадлежность компании:" />
      </Flex>

      <Flex col xs={3}>
        <CellText reverse label={getValueWithDashFallback(legalForm)} caption="Организационно-правовая форма:" />
      </Flex>

      <Flex col xs={3}>
        <CellText reverse label={getValueWithDashFallback(legalAddress)} caption="Юридический адрес:" />
      </Flex>

      <Flex col xs={3}>
        <CellText reverse label={getValueWithDashFallback(actualAddress)} caption="Фактический адрес:" />
      </Flex>
    </Flex>
  </>
);
