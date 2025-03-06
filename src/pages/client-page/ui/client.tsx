import {useState} from 'react';

import {useGate, useUnit} from 'effector-react';
import {reflect} from '@effector/reflect';

import {Heading, Spacer, theme} from '@mtsbank/ui-kit';
import {Divider, granatLightTheme, Text} from '@mtsdengi/uikit-fintech';

import {Gap} from '~/ui/gap';
import {Navigation} from '~/ui/navigation';

import {Issues} from '~/entities/issues';
import {Products} from '~/entities/customer-products';
import {ServicePackagesTabs} from '~/entities/service-packages';
import {PhysicalClientTabs} from '~/entities/physical-client';
import {CommonInformation} from '~/entities/common-info';

import {capitalizeFullName, prepareOptions} from '../lib/utils';
import {OPTIONS, $clientsGate, stores} from '../model';

import {Styled} from './styled';
import {getLoanApplicationsQuery} from '~/entities/issues/model/api';

const EnrichedClientTabs = reflect({
  view: PhysicalClientTabs,
  bind: stores.clientData,
});

const EnrichedProducts = reflect({
  view: Products,
  bind: {
    products: stores.$products.map(({borrowedFunds, ownFunds}) => ({borrowedFunds, ownFunds})),
  },
});

const TABS_STRATEGIES = {
  '1': <EnrichedClientTabs />,
  '2': <EnrichedProducts />,
  '3': <ServicePackagesTabs />,
  '4': <Issues />,
};

export type MenuOption = {
  /** Текст элемента меню */
  label: string;
  /** Ссылка */
  link: string;
  /** Иконка */
  icon?: string;
};

export type UiMenuProps = {
  /** Элементы меню */
  options: MenuOption[];
  /** Управление элементами производится через onClick */
  isControlled?: boolean;
  /** Нажатие на элемент меню */
  onClick?: (id: string) => void;
};

export const Client = () => {
  useGate($clientsGate);
  const [clientName, productsQuantity, clientInfo, loanApplicationsQuantity] = useUnit([
    stores.clientData.shortName,
    stores.$products.map(({productsQuantity}) => productsQuantity),
    stores.$clientInfo,
    stores.$loanApplicationsQuantity,
  ]);
  const [selected, setSelected] = useState<string>(OPTIONS[0].id);

  return (
    <div>
      <Heading noMargin h={3} fontWeight="medium" size="md">
        {capitalizeFullName(clientName)}
      </Heading>
      <Spacer space={theme.spacings.xs3} />
      <Text color={granatLightTheme.colors.text.secondary}>Обращение: Моя Госпожа</Text>

      <Spacer space={granatLightTheme.spacings.s16} />

      <Divider />

      <Spacer space={granatLightTheme.spacings.s36} />

      <Styled.Container>
        <Styled.NavigationWrapper>
          <Navigation
            options={prepareOptions({products: productsQuantity, applications: loanApplicationsQuantity}, OPTIONS)}
            onClick={setSelected}
            selected={selected}
            defaultValue={selected}
          />
        </Styled.NavigationWrapper>

        <Gap space={theme.spacings.md} />

        <Styled.Content>{TABS_STRATEGIES[selected as keyof typeof TABS_STRATEGIES]}</Styled.Content>

        <Gap space={theme.spacings.md} />

        <CommonInformation {...clientInfo} />
      </Styled.Container>
    </div>
  );
};
