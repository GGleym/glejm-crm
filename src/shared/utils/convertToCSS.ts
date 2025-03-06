import {type CSSProperties} from 'styled-components';

import {kebabize} from './kebabize';

const propertiesWithPx = new Set([
  'width',
  'height',
  'top',
  'right',
  'bottom',
  'left',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'fontSize',
  'lineHeight',
  'borderWidth',
  'borderRadius',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'outlineWidth',
  'letterSpacing',
  'wordSpacing',
  'columnGap',
  'columnRuleWidth',
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'perspective',
  'perspectiveOrigin',
  'transformOrigin',
  'translate',
  'boxShadow',
  'textShadow',
  'gap',
]);

/**
 * Преобразует объект со стилями в формате camelCase в строку CSS в формате kebab-case.
 *
 * Эта функция принимает объект, где ключи являются именами CSS-свойств в формате camelCase,
 * а значения - значениями этих свойств. Она преобразует ключи в формат kebab-case и создает
 * строку CSS.
 *
 * @param {CSSProperties} styles - Объект со стилями.
 * @returns {string} Строка CSS.
 *
 * @example
 * const styles = {
 *   backgroundColor: '#e0e0e0',
 *   fontSize: 14,
 *   borderRadius: 8,
 * };
 * // Возвращает 'background-color: #e0e0e0; font-size: 14px; border-radius: 8px;'
 * convertToCSS(styles);
 */

export const convertObjToCss = (...styles: CSSProperties[]): string => {
  const mergedStyles = Object.assign({}, ...styles);
  return Object.entries(mergedStyles)
    .map(([key, value]) => {
      const kebabKey = kebabize(key);
      const formattedValue = typeof value === 'number' && propertiesWithPx.has(key) ? `${value}px` : value;
      return `${kebabKey}: ${formattedValue};`;
    })
    .join(' ');
};
