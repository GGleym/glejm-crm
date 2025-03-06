import styled from 'styled-components';

import {getContainerStyles, getItemStyles} from './utils';
import type {
  AlignContent,
  AlignItems,
  AlignSelf,
  FlexDirection,
  FlexGrow,
  FlexShrink,
  FlexSize,
  FlexWrap,
  InitialFlexboxSettings,
  JustifyContent,
} from './types';

export const StyledContainerFlex = styled.div<{
  $breakpoints: InitialFlexboxSettings;
  $columns?: number;
  $columnSpacing?: number;
  $rowSpacing?: number;
  $alignContent?: AlignContent;
  $alignItems?: AlignItems;
  $alignSelf?: AlignSelf;
  $justifyContent?: JustifyContent;
  $grow?: FlexGrow;
  $shrink?: FlexShrink;
  $minWidth?: 0 | string;
  $minHeight?: 0 | string;
  $fluid?: boolean;
  $wrap?: FlexWrap;
  $direction?: FlexDirection;
  $xs?: FlexSize;
  $sm?: FlexSize;
  $md?: FlexSize;
  $lg?: FlexSize;
  $xl?: FlexSize;
  $container: boolean;
  $col?: boolean;
}>`
  ${(props) => {
    const {$container, $col} = props;
    let resultStyles = '';
    // Добавление стилей для контейнера
    if ($container) {
      resultStyles += getContainerStyles(props);
    }
    // Добавление стилей для итема внутри контейнера
    if ($col) {
      resultStyles += getItemStyles(props);
    }
    return resultStyles;
  }}
  box-sizing: border-box;
`;
