import {granatLightTheme} from '@mtsdengi/uikit-fintech';
import styled, {css} from 'styled-components';

import {theme} from '~/consts/theme';

const Wrapper = styled.div<{$selected: boolean}>`
  padding: ${theme.spacings.xs3}px ${theme.spacings.xs2}px;
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s background-color;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({$selected}) =>
    $selected
      ? css`
          background-color: #1d2023;
          p {
            color: #fafafa;
          }
        `
      : css`
          &:hover {
            background: ${granatLightTheme.colors.background.hover};
          }
        `}
`;

const Badge = styled.div`
  padding: 0px ${theme.spacings.xs4}px;
  background-color: #f2f3f7;
  border-radius: 100px;

  font-size: 12px;
  line-height: 16px;
  font-weight: 500;

  text-align: center;
`;

export const Styled = {
  Wrapper,
  Badge,
};
