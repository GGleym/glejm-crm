import styled from 'styled-components';

import {granatLightTheme, Icon as KitIcon} from '@mtsdengi/uikit-fintech';

const List = styled.ul`
  all: unset;
`;

const FilterWrapper = styled.div`
  display: inline-grid;
  width: 100%;
  grid-template-columns: 3fr 1fr auto;
  align-items: end;
  column-gap: ${granatLightTheme.spacings.s12}px;
`;

const Icon = styled(KitIcon)`
  cursor: pointer;
`;

export const Styled = {
  List,
  FilterWrapper,
  Icon,
};
