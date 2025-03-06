import {type PropsWithChildren} from 'react';

import {Styled} from './styled';

const CONFIG = {
  default: {
    color: '#969FA8',
  },
  danger: {
    color: '#F95721',
  },
  success: {
    color: '#26CD58',
  },
} as const;

export type TagProps = PropsWithChildren<{
  palette?: 'default' | 'danger' | 'success';
}>;

export const Tag = ({children, palette = 'default'}: TagProps) => {
  const config = CONFIG[palette];

  return <Styled.Wrapper $color={config.color}>{children}</Styled.Wrapper>;
};
