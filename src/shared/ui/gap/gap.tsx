import styled from 'styled-components';

import {LOCAL_THEME} from '~/consts/local-theme';

type ValueOf<T> = T[keyof T];

type GapSizes = ValueOf<typeof LOCAL_THEME.spacings>;

const Gutter = styled.div<{$size: GapSizes}>`
  width: ${(props) => props.$size}px;
  min-width: ${(props) => props.$size}px;
  display: inline-block;
`;

export type GapProps = {
  /**
   * Размер отступа.
   */
  space: GapSizes;
};

export const Gap = ({space}: GapProps) => <Gutter $size={space} />;
