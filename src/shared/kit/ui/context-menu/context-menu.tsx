import {RefObject, useState} from 'react';

import {Avatar, Button, Cell, Droplist, Flex, Text, Icon, useClickOutside} from '@mtsdengi/uikit-fintech';

import {Styled} from './styled';

export const ContextMenu = ({anchorRef, opened}: {anchorRef: RefObject<HTMLElement>; opened: boolean}) => {
  const [openedState, setOpenedState] = useState(opened);

  useClickOutside(anchorRef, () => setOpenedState(false));

  return (
    <Droplist open={opened} anchorRef={anchorRef}>
      <Flex gap="8px" dir="column">
        <Cell caption="Description" label="Context Menu" bold slotBefore={<Avatar size={44} icon={<Icon />} />} />
        <Styled.Container>
          <Flex gap="4px">
            <Text>Чуток контента</Text>
            {/* <Icon icon={<ReloadSvg />} color="#7b61ff" /> */}
          </Flex>
        </Styled.Container>
        <Button variant="negative">Кнопка</Button>
      </Flex>
    </Droplist>
  );
};
