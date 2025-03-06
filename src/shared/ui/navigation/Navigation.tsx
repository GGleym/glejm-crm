import {Fragment, type ReactNode, useState} from 'react';

import {Spacer, theme, useDidUpdate} from '@mtsbank/ui-kit';

import {Item} from './ui/Item';

export type MenuOption = {
  /** ID опции */
  id: string;
  /** Текст элемента меню */
  label: string;
  /** Иконка */
  icon?: ReactNode;
};

export type NavigationProps = {
  /** Элементы меню */
  options: MenuOption[];
  /** Текущий таб */
  selected: string;
  /** Дефолтное значение */
  defaultValue: string | number;
  /** Управление элементами производится через onClick */
  isControlled?: boolean;
  /** Нажатие на элемент меню */
  onClick?: (value: string) => void;
};

export const Navigation = ({options, onClick, selected, defaultValue}: NavigationProps) => {
  const [innerSelected, setInnerSelected] = useState(defaultValue || selected);

  useDidUpdate(() => {
    setInnerSelected(selected);
  }, [selected]);

  const handleClick = (value: string) => {
    setInnerSelected(value);
    onClick?.(value);
  };

  return (
    <ul>
      {options.map((option, index) => (
        <Fragment key={option.label}>
          <Item {...option} onSelect={handleClick} selected={innerSelected === option.id} />
          {index + 1 < options.length && <Spacer space={theme.spacings.xs2} />}
        </Fragment>
      ))}
    </ul>
  );
};
