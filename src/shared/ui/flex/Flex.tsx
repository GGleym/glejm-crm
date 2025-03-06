import {type PropsWithChildren, useMemo, memo, createContext, useContext, forwardRef} from 'react';

import {DEFAULT_COLUMNS, DEFAULT_PROPS, INITIAL_BREAKPOINTS} from './consts';
import type {FlexProps, InitialFlexboxSettings} from './types';
import {StyledContainerFlex} from './styled';

export const FlexContainerContext = createContext<InitialFlexboxSettings | null>({});

const FlexContext = createContext<{
  $columns: number;
  $rowSpacing?: number;
  $columnSpacing?: number;
}>({
  $columns: DEFAULT_COLUMNS,
});

const FlexContainer = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>((props) => {
  const {children, rowSpacing, columnSpacing, container, wrap, direction, col, ...otherProps} = props;
  const {$columns, $rowSpacing: contextRowSpacing, $columnSpacing: contextColumnSpacing} = useContext(FlexContext);
  const breakpoints = useContext<InitialFlexboxSettings | null>(FlexContainerContext);

  const currColumns = props.container ? (otherProps.columns ?? DEFAULT_COLUMNS) : $columns;

  const initialProps = useMemo(() => {
    return {
      ...DEFAULT_PROPS,
      $wrap: wrap ?? DEFAULT_PROPS.$wrap,
      $direction: direction,
      $container: container,
      $col: col,
      $breakpoints: INITIAL_BREAKPOINTS,
      $columns: currColumns,
      $rowSpacing: container ? rowSpacing : (contextRowSpacing ?? rowSpacing),
      $columnSpacing: container ? columnSpacing : (contextColumnSpacing ?? columnSpacing),
      $$alignContent: otherProps.alignContent,
      $alignItems: otherProps.alignItems,
      $alignSelf: otherProps.alignSelf,
      $justifyContent: otherProps.justifyContent,
      $grow: otherProps.grow,
      $shrink: otherProps.shrink,
      $minWidth: otherProps.minWidth,
      $minHeight: otherProps.minHeight,
      $fluid: otherProps.fluid,
      $xs: otherProps.xs,
      $sm: otherProps.sm,
      $md: otherProps.md,
      $lg: otherProps.lg,
      $xl: otherProps.xl,
    };
  }, [
    container,
    otherProps,
    currColumns,
    contextRowSpacing,
    rowSpacing,
    contextColumnSpacing,
    columnSpacing,
    breakpoints,
    wrap,
    direction,
  ]);

  const context = useMemo(
    () => ({
      $columns: currColumns,
      $rowSpacing: rowSpacing ?? 0,
      $columnSpacing: columnSpacing ?? 0,
    }),
    [currColumns, rowSpacing, columnSpacing],
  );

  return (
    <FlexContext.Provider value={context}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <StyledContainerFlex {...initialProps}>{children}</StyledContainerFlex>
    </FlexContext.Provider>
  );
});

export const Flex = memo(FlexContainer);

FlexContainer.displayName = 'Flex';
