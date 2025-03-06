import {ThemeProvider} from 'styled-components';

import {granatLightTheme, StyleProvider} from '@mtsdengi/uikit-fintech';

import {RoutesView} from './routing';
import {GlobalStyle} from '../shared/ui/global-styles';

export const App = () => (
  <StyleProvider>
    <ThemeProvider theme={granatLightTheme}>
      <GlobalStyle />
      <RoutesView />
    </ThemeProvider>
  </StyleProvider>
);
