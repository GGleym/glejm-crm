import styled from 'styled-components';

const Wrapper = styled.div<{$color: string}>`
  display: inline-block;
  text-align: center;
  padding: 2px 4px;
  border-radius: 6px;

  background-color: ${({$color}) => $color};
  color: #ffffff;

  font-size: 12px;
  line-height: 16px;
  font-weight: medium;
`;

export const Styled = {
  Wrapper,
};
