import styled from 'styled-components';

import {Badge} from '@mtsdengi/uikit-fintech';

const MenuBadge = styled(Badge)<{active: boolean}>`
  ${({active}) => `
    & > p {
        color: ${active ? 'white' : 'black'};
    }
    background: ${active ? 'black' : 'white'};
  `}
  cursor: pointer;
`;

const MoneyWrapper = styled.div`
  text-align: right;
`;

export const Styled = {
  MenuBadge,
  MoneyWrapper,
};
