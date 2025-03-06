import 'styled-components';
import {ITheme} from '@mtsdengi/uikit-fintech';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
