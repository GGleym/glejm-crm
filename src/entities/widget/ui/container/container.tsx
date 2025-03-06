import {type PropsWithChildren} from 'react';

import {Styled} from './styled';
import {TitlePrimary, Counter} from '@mtsdengi/uikit-fintech';

export type ContainerProps = {
  /** Заголовок */
  title: string;
  /** Число активных элементов */
  count: number;
  /** Наличие контролов */
  hasMore?: boolean;
  /** Вариант контента */
  variant?: 'light' | 'grey';
};

export const Container = ({
  title,
  count,
  children,
  hasMore = false,
  variant = 'light',
}: PropsWithChildren<ContainerProps>) => {
  return (
    <Styled.Wrapper>
      {/* <Styled.Header $hasMore={hasMore}> */}
      {/* <Styled.Title> */}
      {/* <TitlePrimary title={title} paddingTop={0} counter={<Counter size={20} value={count} variant="primary" />} /> */}
      <TitlePrimary title={title} paddingTop={0} counter={<Styled.Counter>{count}</Styled.Counter>} />
      {/* <Styled.Text>{title}</Styled.Text> */}
      {/* <Styled.Counter>{count}</Styled.Counter> */}
      {/* </Styled.Title> */}
      {/* </Styled.Header> */}
      <Styled.Body $variant={variant}>{children}</Styled.Body>
    </Styled.Wrapper>
  );
};
