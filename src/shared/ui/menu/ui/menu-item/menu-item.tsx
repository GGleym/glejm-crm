import {ReactNode} from 'react';

import {LOCAL_THEME} from '~/consts/local-theme';

import {Styled} from './styled';

export type LinkProps = {
  /** Текст элемента меню */
  label: string;
  /** Показатель выбран ли элемент меню */
  selected: boolean;
  /** Признак открытия меню */
  isMenuOpened: boolean;
  /** Иконка */
  icon: ReactNode;
  /** Нажатие по элементу меню */
  onClick?: () => void;
};

export const MenuItem = ({label, selected, isMenuOpened, icon: Icon, onClick}: LinkProps) => (
  <Styled.Wrapper $selected={selected} onClick={() => onClick?.()}>
    <Styled.Container>
      <Styled.IconWrapper>{Icon}</Styled.IconWrapper>
      <Styled.Text
        nowrap
        $isMenuOpened={isMenuOpened}
        size="lg"
        fontWeight="medium"
        color={LOCAL_THEME.colors.neutral.g200}
      >
        {label}
      </Styled.Text>
    </Styled.Container>
  </Styled.Wrapper>
);
