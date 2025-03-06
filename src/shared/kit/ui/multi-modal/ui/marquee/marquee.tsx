import {forwardRef, type PropsWithChildren} from 'react';

import {Styled} from './styled';
import {Styled as TabStyled} from '../tab/styled';

type MarqueeProps = PropsWithChildren<{
  /** Время анимации */
  animationDuration?: number;
}>;

export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(({children, animationDuration = 4}, containerRef) => (
  <TabStyled.MarqueeContainer ref={containerRef}>
    <Styled.Marquee $animationDuration={animationDuration}>{children}</Styled.Marquee>
    <Styled.Marquee aria-hidden={true} $animationDuration={animationDuration}>
      {children}
    </Styled.Marquee>
  </TabStyled.MarqueeContainer>
));
