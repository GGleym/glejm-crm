import styled from 'styled-components';

import {theme} from '~/consts/theme';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.xs}px;
`;

export const Styled = {
  Container,
};
