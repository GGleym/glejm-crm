import styled from 'styled-components';

import {theme} from '@mtsbank/ui-kit';

import {prepareBadgeStatusToColor} from './model/utils';
import {type Config} from './model/types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const Status = styled.div<{$status?: string; $config?: Config}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: ${theme.spacings.xs3};
  background: ${({$status, $config}) => prepareBadgeStatusToColor($status, $config)};
`;

export const Styled = {
  Wrapper,
  Status,
};
