import styled from 'styled-components';

import {granatLightTheme} from '@mtsdengi/uikit-fintech';

const Container = styled.div`
  width: 420px;
  height: fit-content;
  min-width: 420px;
  padding: ${granatLightTheme.spacings.s24}px;
  position: relative;
  background: ${granatLightTheme.colors.background.secondary};
  border-radius: 16px;
`;

export const Styled = {
  Container,
};
