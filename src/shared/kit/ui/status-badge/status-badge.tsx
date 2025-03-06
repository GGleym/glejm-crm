import {type PropsWithChildren} from 'react';

import {Text} from '@mtsdengi/uikit-fintech';

import {Gap} from '~/ui/gap';
import {type Config} from './model/types';

import {Styled} from './styled';

export type StatusBadgeProps = PropsWithChildren<{
  /** Статус бейджа */
  status?: string;
  /** Определение нестандартных статусов и/или цветов */
  config?: Config;
  /** Цвет текста */
  color?: string;
}>;

export const StatusBadge = ({status, config, color, children}: StatusBadgeProps) => (
  <Styled.Wrapper>
    <Styled.Status $status={status} $config={config} />
    <Gap space={8} />
    <Text font="p4RegularText" color={color}>
      {children}
    </Text>
  </Styled.Wrapper>
);
