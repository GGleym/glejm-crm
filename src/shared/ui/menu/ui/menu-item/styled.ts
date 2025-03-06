import styled, {css} from 'styled-components';

import {Text as KitText} from '@mtsdengi/uikit-fintech';

import {LOCAL_THEME} from '~/consts/local-theme';

const Wrapper = styled.li<{$selected: boolean}>`
  list-style: none;
  padding: 12px;
  border-radius: 20px;
  cursor: pointer;

  ${({$selected}) =>
    $selected &&
    css`
      background: #ffe4e9;
    `}

  &&:hover {
    background: #ffe4e9;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  max-width: ${({theme}) => theme.spacings.s32}px;
  max-height: ${({theme}) => theme.spacings.s32}px;
`;

const Container = styled.div`
  text-decoration: none;
  align-items: center;
  display: flex;
  color: ${LOCAL_THEME.colors.neutral.g200};
`;

const Text = styled(KitText)<{$isMenuOpened: boolean}>`
  transition: opacity 0.3s ease;
  opacity: ${({$isMenuOpened}) => ($isMenuOpened ? 1 : 0)};
  pointer-events: ${({$isMenuOpened}) => ($isMenuOpened ? 'all' : 'none')};
`;

export const Styled = {
  Wrapper,
  Container,
  IconWrapper,
  Text,
};
