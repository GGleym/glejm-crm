import {Heading, Spacer} from '@mtsbank/ui-kit';
import {CellText} from '@mtsdengi/uikit-fintech';

import {theme} from '~/consts/theme';
import {Flex} from '~/ui/flex';
import {getValueWithDashFallback} from '~/utils/getValuesWithDashFallback';

import {type PersonalInfoCardProps} from '../../lib/types';

export const PersonalInfoCard = ({
  dateOfBirth,
  placeOfBirth,
  age,
  gender,
  citizenship,
  bankYears,
  maritalStatus,
  postCode,
  education,
  rboId,
  siebelId,
  domainId,
  mdmId,
}: PersonalInfoCardProps) => (
  <>
    <Heading as="h4" fontWeight="medium" size="sm">
      Персональные данные
    </Heading>

    <Flex container columns={4} rowSpacing={1} columnSpacing={1.5}>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(citizenship)} caption="Гражданство" />
      </Flex>
      <Flex col xs={3}>
        <CellText reverse label={getValueWithDashFallback(placeOfBirth)} caption="Место рождения:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(dateOfBirth)} caption="Дата рождения:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(age)} caption="Возраст (полных лет):" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(gender)} caption="Пол:" />
      </Flex>
    </Flex>

    <Spacer space={theme.spacings.md} />

    <Heading as="h4" fontWeight="medium" size="sm">
      Дополнительная информация
    </Heading>

    <Flex container columns={4} rowSpacing={1} columnSpacing={1.5}>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(bankYears)} caption="В банке:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(postCode)} caption="Отделение привязки:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(maritalStatus)} caption="Семейное положение:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(education)} caption="Образование:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(rboId)} caption="Идентификатор РБО:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(siebelId)} caption="Идентификатор Siebel:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(domainId)} caption="Идентификатор Domain:" />
      </Flex>
      <Flex col xs={1}>
        <CellText reverse label={getValueWithDashFallback(mdmId)} caption="Идентификатор MDM:" />
      </Flex>
    </Flex>
  </>
);
