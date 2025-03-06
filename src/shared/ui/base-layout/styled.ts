import styled from 'styled-components';

import {LOCAL_THEME} from '~/consts/local-theme';

export const BREAKPOINTS = {
  [LOCAL_THEME.breakpoints.lg]: 1356,
  [LOCAL_THEME.breakpoints.md]: 1216,
  [LOCAL_THEME.breakpoints.sm]: 944,
} as const;

const Layout = styled.div`
  height: 100vh;
  position: relative;
`;

export const Styled = {
  Layout,
};
