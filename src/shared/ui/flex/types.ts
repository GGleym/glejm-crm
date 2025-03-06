import {INITIAL_BREAKPOINTS} from './consts';

export type GlobalInheritValues = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalInheritValues;
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | GlobalInheritValues;
export type FlexSize = 'auto' | number;
export type JustifyContent =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'left'
  | 'right'
  | GlobalInheritValues;

export type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'normal'
  | GlobalInheritValues;

export type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | GlobalInheritValues;

export type AlignSelf =
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | GlobalInheritValues;

export type FlexGrow = number | GlobalInheritValues;

export type FlexShrink = number | GlobalInheritValues;

export type FlexProps = {
  /**
   *  Количество колонок для контейнера.
   */
  columns?: number;
  /**
   * Определяет тип флекса, контейнер или колонка.
   */
  container?: boolean;
  /**
   * Определяет расстояние между колонками по формуле columnSpacing * 16.
   */
  columnSpacing?: number;
  /**
   * Определяет должен ли контейнер занимать 100% ширины. Настройка необходима для контейнера с direction = column, тк контейнер перестает занимать всю ширину родителя.
   */
  fluid?: boolean;
  /**
   * Размер отступа между строками. По умолчанию имеет множитель 16. То есть, чтобы задать отступ между строками в 32px, нужно передать значение 2: 2 * 16 = 32px.
   */
  rowSpacing?: number;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  justifyContent?: JustifyContent;
  /**
   * Определяет как много свободного пространства во flex-контейнере должно быть назначено текущему элементу.
   */
  grow?: FlexGrow;
  /**
   * Определяет фактор сжатия flex-элемента.
   */
  shrink?: FlexShrink;
  /**
   * Минимальная ширина блока. Может потребоваться при использовании shrink.
   */
  minWidth?: 0 | string;
  /**
   * Минимальная высота блока. Может потребоваться при использовании shrink.
   */
  minHeight?: 0 | string;
  /**
   * Определяет направление Flex.
   */
  direction?: FlexDirection;
  /**
   * Определяет является ли компонент колонкой.
   */
  col?: boolean;
  /**
   * Определяет нужно ли переносить Flex элемент на другую сторку.
   */
  wrap?: FlexWrap;
  /**
   * Определяет сколько колонок компонент должен занять на опр размере экрана.
   */
  xs?: FlexSize;
  /**
   * Определяет сколько колонок компонент должен занять на опр размере экрана.
   */
  sm?: FlexSize;
  /**
   * Определяет сколько колонок компонент должен занять на опр размере экрана.
   */
  md?: FlexSize;
  /**
   * Определяет сколько колонок компонент должен занять на опр размере экрана.
   */
  lg?: FlexSize;
  /**
   * Определяет сколько колонок компонент должен занять на опр размере экрана.
   */
  xl?: FlexSize;
};

export type Size = keyof typeof INITIAL_BREAKPOINTS;

export type InitialFlexboxSettings = {
  [T in Size]?: number;
};

export type Breakpoint = {
  $breakpoints: InitialFlexboxSettings;
};

export type FlexOmitProps = Omit<FlexProps, 'wrap' | 'direction' | 'md'> & {
  $wrap?: FlexWrap;
  $md?: FlexSize;
  $direction?: FlexDirection;
};

export type FlexPropsWithBreakpoints = FlexOmitProps & Breakpoint;
