import {type PropsWithChildren} from 'react';

import {Styled} from './styled';

const CONFIG = {
  default: {
    $color: '#FFFFFF',
    $size: 16,
  },
  gray: {
    $color: '#F2F3F7',
    $size: 24,
  },
};

export type SectionProps = PropsWithChildren<{
  palette?: 'default' | 'gray';
  hoverable?: boolean;
}>;

export const Section = ({children, palette = 'default', hoverable = false}: SectionProps) => (
  <Styled.Wrapper {...CONFIG[palette]} $hoverable={hoverable}>
    {children}
  </Styled.Wrapper>
);
