import styled from 'styled-components';

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.s12}px;
`;

export const Styled = {
  Menu,
};
