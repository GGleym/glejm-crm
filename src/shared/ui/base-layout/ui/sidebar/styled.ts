import styled from 'styled-components';

const Sidebar = styled.aside<{$isOpened: boolean}>`
  width: 250px;
  height: 100vh;
  padding: 16px 16px 32px 16px;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.3s ease;
  background: ${({theme}) => theme.colors.background.secondary};
  z-index: 100;

  ${({$isOpened}) =>
    !$isOpened &&
    `
    width: 80px;
  `}
`;

const BurgerContainer = styled.div`
  padding-left: ${({theme}) => theme.spacings.s12}px;
  cursor: pointer;
`;

const Overlay = styled.div<{$isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  visibility: ${({$isOpen}) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({$isOpen}) => ($isOpen ? 1 : 0)};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export const Styled = {
  Sidebar,
  BurgerContainer,
  Overlay,
};
