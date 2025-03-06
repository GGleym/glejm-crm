import styled from 'styled-components';

import {granatLightTheme} from '@mtsdengi/uikit-fintech';

const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: ${granatLightTheme.spacings.s16}px ${granatLightTheme.spacings.s32}px 0 ${granatLightTheme.spacings.s32}px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.background.overlay};
`;

export const Styled = {
  Wrapper,
  Overlay,
};
