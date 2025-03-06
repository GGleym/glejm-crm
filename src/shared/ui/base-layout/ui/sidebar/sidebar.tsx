import {useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useUnit} from 'effector-react';

import {Icon, useClickOutside} from '@mtsdengi/uikit-fintech';
import {Spacer, theme} from '@mtsbank/ui-kit';

import {LOCAL_THEME} from '~/consts/local-theme';
import {useScrollBlocked} from '~/hooks/useScrollBlocked';
import {Menu} from '~/ui/menu';
import {multiModalEvents, multiModalStores} from '~/kit/ui/multi-modal';

import {MENU_OPTIONS} from '../../model';
import {Styled} from './styled';

export const Sidebar = () => {
  const modals = useUnit(multiModalStores.$modals);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  useScrollBlocked(isOpen);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  useClickOutside(sidebarRef, () => setIsOpen(false));

  return (
    <>
      <Styled.Sidebar $isOpened={isOpen} ref={sidebarRef}>
        <Spacer space={LOCAL_THEME.spacings.sm} />
        <Styled.BurgerContainer onClick={() => setIsOpen((open) => !open)}>
          <Icon iconPath="granat/menu/size-24-style-outline" />
        </Styled.BurgerContainer>
        <Spacer samespace space={theme.spacings.xl3} />
        <Menu
          options={MENU_OPTIONS}
          isMenuOpened={isOpen}
          onPathSelected={(id) => {
            if (modals.find(({id: viewID}) => viewID === id)) {
              multiModalEvents.onModalActivatedEvent(id);
            } else {
              multiModalEvents.onModalAddedEvent(id);
            }

            setIsOpen(false);
          }}
        />
      </Styled.Sidebar>

      {createPortal(<Styled.Overlay $isOpen={isOpen} />, document.body)}
    </>
  );
};
