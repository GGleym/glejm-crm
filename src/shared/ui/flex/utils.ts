// import { isString } from '@mts/mlc-core-utils';
// import { addCssRuleIfDefined } from '@mts/mlc-core-components';

import {isNullable} from '@mtsdengi/uikit-fintech';

import {isString} from '~/utils/is-string';

import {SIZE_TYPES, DEFAULT_SPACING} from './consts';
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
  Size,
} from './types';
import {addCssRuleIfDefined} from '~/utils/add-css-rule-if-defined';

export const getFlexBasis = (columns?: number, size?: string | number) => {
  if (isString(size) || isNullable(size)) {
    return undefined;
  }

  return `${(size / (columns ?? 1)) * 100}%`;
};

export const getMediaSize = (
  {
    $columns,
    ...props
  }: {
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
  },
  sizeType: Size,
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const size = props[sizeType];

  if (size) {
    const flexBasis = getFlexBasis($columns, size);

    if (!parseFloat(flexBasis ?? '')) {
      return '';
    }

    return `
        @media (min-width: ${props.$breakpoints[sizeType]}px) {
            flex-basis: ${flexBasis};
            max-width: ${flexBasis};
            width: auto;
        }
    `;
  }

  return '';
};

export const getItemStyles = (props: {
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
}) => {
  const {$columns, $xs, $rowSpacing, $columnSpacing, $alignSelf, $grow, $shrink, $minWidth, $minHeight} = props;
  const flexBasisXs = getFlexBasis($columns, $xs);
  const flexBasisSm = getMediaSize(props, SIZE_TYPES.$sm);
  const flexBasisMd = getMediaSize(props, SIZE_TYPES.$md);
  const flexBasisLg = getMediaSize(props, SIZE_TYPES.$lg);
  const flexBasisXl = getMediaSize(props, SIZE_TYPES.$xl);

  let result = `
        padding: ${($rowSpacing ?? 0) * DEFAULT_SPACING}px 0 0 ${($columnSpacing || 0) * DEFAULT_SPACING || 0}px;
    `;
  result +=
    flexBasisXs !== undefined
      ? `
    flex-basis: ${flexBasisXs};
    max-width: ${flexBasisXs};
    width: 100%;
  `
      : '';
  result += `
        ${addCssRuleIfDefined('align-self', $alignSelf)}
        ${addCssRuleIfDefined('flex-grow', $grow)}
        ${addCssRuleIfDefined('flex-shrink', $shrink)}
        ${addCssRuleIfDefined('min-width', $minWidth)}
        ${addCssRuleIfDefined('min-height', $minHeight)}
    `;
  result += flexBasisSm ?? '';
  result += flexBasisMd ?? '';
  result += flexBasisLg ?? '';
  result += flexBasisXl ?? '';
  return result;
};

export const getContainerStyles = ({
  $wrap,
  $direction,
  $alignItems,
  $justifyContent,
  $alignContent,
  $rowSpacing,
  $columnSpacing,
  $fluid,
  $alignSelf,
  $grow,
  $shrink,
  $minWidth,
  $minHeight,
}: {
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
}) => {
  const result = `
        display: flex;
        width: ${$fluid ? '100%' : 'auto'};
        ${addCssRuleIfDefined('flex-wrap', $wrap)}
        ${addCssRuleIfDefined('flex-direction', $direction)}
        ${addCssRuleIfDefined('align-items', $alignItems)}
        ${addCssRuleIfDefined('align-self', $alignSelf)}
        ${addCssRuleIfDefined('justify-content', $justifyContent)}
        ${addCssRuleIfDefined('align-content', $alignContent)}
        margin-left:  -${($columnSpacing ?? 0) * DEFAULT_SPACING}px;
        margin-top: -${($rowSpacing ?? 0) * DEFAULT_SPACING}px;
        ${addCssRuleIfDefined('flex-grow', $grow)}
        ${addCssRuleIfDefined('flex-shrink', $shrink)}
        ${addCssRuleIfDefined('min-width', $minWidth)}
        ${addCssRuleIfDefined('min-height', $minHeight)}
  `;

  return result;
};
