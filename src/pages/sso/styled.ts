import styled from 'styled-components';

import {granatLightTheme} from '@mtsdengi/uikit-fintech';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${granatLightTheme.colors.background.secondary};
`;

export const Styled = {
  Container,
};
