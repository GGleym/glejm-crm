import styled, {css} from 'styled-components';

import {Text} from '@mtsdengi/uikit-fintech';

import {convertObjToCss} from '../../../../shared/utils/convertToCSS';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div<{$hasMore: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  ${({$hasMore}) =>
    $hasMore &&
    css`
      padding-right: 6px;
    `}
`;

const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  gap: 8px;

  margin-bottom: 8px;
`;

const Counter = styled(Text)`
  background-color: #ff0032;
  border-radius: 100px;
  padding: 0 4px;
  color: #ffffff;
`;

const SCHEME_VARIANT = {
  light: {
    backgroundColor: '#FFFFFF',
  },
  grey: {
    backgroundColor: '#F2F3F7',
    padding: 16,
    borderRadius: 8,
  },
} as const;

const Body = styled.div<{$variant: keyof typeof SCHEME_VARIANT}>`
  ${({$variant}) => convertObjToCss(SCHEME_VARIANT[$variant])}
`;

export const Styled = {
  Wrapper,
  Header,
  Title,
  Text,
  Counter,
  Body,
};
