import {ReactNode, useState} from 'react';

import {
  Flex,
  granatLightTheme,
  MoneyText,
  SegmentedControl,
  SegmentedControlItem,
  Spacer,
  Tab,
  Tabs,
  Text,
} from '@mtsdengi/uikit-fintech';

import {OPTIONS} from './model';
import {Styled} from './styled';

type ProductsProps = {
  /** Продукты клиента */
  products: {
    /** Собственные средства */
    ownFunds: {
      overallSum: number;
      products: Partial<{title: string; render: () => ReactNode}>[];
    };
    /** Заемные средства */
    borrowedFunds: {
      overallSum: number;
      products: Partial<{title: string; render: () => ReactNode}>[];
    };
  };
};

export const Products = ({products}: ProductsProps) => {
  const [segmentedSelected, setSegmentedSelected] = useState(OPTIONS[0].key ?? {});
  const [tabSelected, setTabSelected] = useState(products.ownFunds.products[0] ?? '');

  const {ownFunds, borrowedFunds} = products;

  const {products: currentProducts, overallSum} = segmentedSelected === 'own' ? ownFunds : borrowedFunds;

  return (
    <>
      <SegmentedControl fluid size={44}>
        {OPTIONS.map(({tabName, key}) => (
          <SegmentedControlItem key={key} active={key === segmentedSelected} onChange={() => setSegmentedSelected(key)}>
            {tabName}
          </SegmentedControlItem>
        ))}
      </SegmentedControl>
      <Spacer space="s24" />
      <Flex justifyContent="space-between" alignItems="flex-end">
        {/* TODO: подумать над логикой. Отрефакторить */}
        <Tabs activeTab={tabSelected} onActiveTabChange={setTabSelected} size={32} type="button">
          {currentProducts.map((product) => (
            <Tab key={product.title} id={product} text={product.title ?? ''} />
          ))}
        </Tabs>
        <Styled.MoneyWrapper>
          <Text font="p4RegularText" color={granatLightTheme.colors.text.secondary}>
            Всего
          </Text>
          <MoneyText font="h3Text" currency="RUB">
            {overallSum}
          </MoneyText>
        </Styled.MoneyWrapper>
      </Flex>
      <Spacer space="s24" />
      {tabSelected.render?.()}
    </>
  );
};
