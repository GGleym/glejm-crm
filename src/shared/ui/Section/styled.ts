import styled, {css} from 'styled-components';

const Wrapper = styled.div<{$color: string; $size: number; $hoverable: boolean}>`
  background: ${({$color}) => $color};
  border-radius: 24px;
  padding-inline: 24px;
  padding-block: ${({$size}) => $size}px;

  ${({$hoverable}) =>
    $hoverable &&
    css`
      :hover {
        background-color: #e2e5eb;
        cursor: pointer;
      }
    `}
`;

export const Styled = {
  Wrapper,
};
