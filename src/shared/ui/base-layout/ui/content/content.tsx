import {type PropsWithChildren} from 'react';

import {Header} from '../header';

import {Styled} from './styled';

export const Content = ({children}: PropsWithChildren) => (
  <Styled.ContentLayout>
    <Header />
    <Styled.Container>
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
    </Styled.Container>
  </Styled.ContentLayout>
);
