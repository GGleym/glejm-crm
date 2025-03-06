import {Heading} from '@mtsbank/ui-kit';
import {BannerTertiary, CellText, Icon} from '@mtsdengi/uikit-fintech';

import {Flex} from '~/ui/flex';
import {getValueWithDashFallback} from '~/utils/getValuesWithDashFallback';

import {type ContactsProps} from '../../lib/types';

export const Contacts = ({phoneNumber, email, registrationAddress, residentialAddress}: ContactsProps) => (
  <>
    <Heading as="h4" fontWeight="medium" size="sm">
      Контакты
    </Heading>

    <Flex container columns={2} rowSpacing={1} columnSpacing={1.5}>
      <Flex col xs={2}>
        <CellText reverse label={getValueWithDashFallback(phoneNumber)} caption="Номер телефона:" />
      </Flex>
      <Flex col xs={2}>
        <CellText reverse label={getValueWithDashFallback(email)} caption="E-mail:" />
      </Flex>
      <Flex col xs={1}>
        <CellText
          reverse
          label={getValueWithDashFallback(registrationAddress)}
          caption="Адрес постоянной регистрации::"
        />
      </Flex>
      {registrationAddress === residentialAddress ? (
        <BannerTertiary icon={<Icon iconPath="" />} description="Адрес регистрации совпадает с адресом проживания" />
      ) : (
        <Flex col xs={1}>
          <CellText reverse label="40" caption="Возраст (полных лет):" />
        </Flex>
      )}
    </Flex>
  </>
);
