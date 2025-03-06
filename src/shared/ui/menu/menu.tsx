import {useUnit} from 'effector-react';

import {multiModalStores} from '~/kit/ui/multi-modal';

import {MenuItem} from './ui/menu-item';
import {MENU_OPTIONS} from '../base-layout/model';

import {Styled} from './styled';

export type MenuProps = {
  /** Элементы меню */
  options: typeof MENU_OPTIONS;
  /** Признак открытия меню */
  isMenuOpened: boolean;
  /** Нажатие на элемент меню */
  onPathSelected?: (link: string) => void;
};

export const Menu = ({options, onPathSelected, isMenuOpened}: MenuProps) => {
  const current = useUnit(multiModalStores.$currentModalId);

  const isControlled = typeof onPathSelected !== 'undefined';

  const handleClick = (id: string) => {
    if (isControlled) {
      onPathSelected(id);
    }
  };

  return (
    <nav>
      <Styled.Menu>
        {options.map((option) => (
          <MenuItem
            {...option}
            key={option.label}
            isMenuOpened={isMenuOpened}
            onClick={() => handleClick(option.id)}
            selected={current === option.id}
          />
        ))}
      </Styled.Menu>
    </nav>
  );
};
