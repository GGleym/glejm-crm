import {type PropsWithChildren, type ReactNode, useRef} from 'react';

import {Spacer} from '@mtsbank/ui-kit';
import {useClickOutside, granatLightTheme, Flex} from '@mtsdengi/uikit-fintech';

import {Styled} from './styled';

export type TOverlayProps = PropsWithChildren<{
  /** Показатель открытия оверлея. */
  isOpen: boolean;
  /** Закрыть оверлей. */
  onClose: () => void;
  /** Включить закрытие оверлея по нажатию на escape. */
  isCloseOnEsc?: boolean;
  /** Включить отображение контрола закрытия оверлея. */
  isCloseOnClick?: boolean;
  /** Футер */
  footer?: ReactNode;
  /** Хедер */
  header?: ReactNode;
}>;

export const Overlay = ({
  children,
  isOpen,
  onClose,
  footer,
  header,
  //   isCloseOnEsc = true,
  isCloseOnClick = true,
}: TOverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  useClickOutside(ref, onClose);

  // TODO: добавить возможность блокировки скролла + выхода из модалки на esc
  // TODO: добавить в тему радиусы

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Styled.Container>
        <Styled.Wrapper ref={ref}>
          {isCloseOnClick && (
            <Flex justifyContent="flex-end">
              <Styled.Close iconPath="granat/cross/size-24-style-outline" />
              <Spacer space={granatLightTheme.spacings.s12} />
            </Flex>
          )}

          <Styled.FlexFluid justifyContent="space-between" dir="column">
            <Styled.Content>
              {!isCloseOnClick && header && (
                <>
                  <Flex justifyContent="space-between" alignItems="center">
                    {header}
                  </Flex>
                  <Spacer space={granatLightTheme.spacings.s24} />
                </>
              )}

              <Styled.OverflowContainer>{children}</Styled.OverflowContainer>
            </Styled.Content>

            {footer && <Styled.Footer>{footer}</Styled.Footer>}
          </Styled.FlexFluid>
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
};
