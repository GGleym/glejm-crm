import {useGate} from 'effector-react';

import {Form} from './ui';
import {ssoGate} from './model';
import {Styled} from './styled';

export const SSOPage = () => {
  useGate(ssoGate);

  return (
    <Styled.Container>
      <Form />
    </Styled.Container>
  );
};
