import {type ReactNode} from 'react';

import {Styled} from './styled';

export type FlatButtonProps = {
  icon: ReactNode;
  enabled: boolean;
};

export const FlatButton = ({icon, enabled}: FlatButtonProps) => {
  return (
    <Styled.Button $enabled={enabled}>
      <Styled.Icon>{icon}</Styled.Icon>
    </Styled.Button>
  );
};
