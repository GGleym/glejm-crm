/**
 * Преобразует строку в формате camelCase или PascalCase в формат kebab-case.
 *
 * Эта функция принимает строку в формате camelCase или PascalCase и преобразует её
 * в формат kebab-case, добавляя дефисы между словами и переводя все символы в нижний регистр.
 *
 * @param {string} str - Строка для преобразования.
 * @returns {string} Строка в формате kebab-case.
 *
 * @example
 * // Возвращает 'camel-case-string'
 * kebabize('camelCaseString');
 *
 * @example
 * // Возвращает 'pascal-case-string'
 * kebabize('PascalCaseString');
 *
 * @example
 * // Возвращает 'already-kebab-case'
 * kebabize('already-kebab-case');
 */

export const kebabize = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Добавляем дефис между маленькими и большими буквами
    .replace(/[\s_]+/g, '-') // Заменяем пробелы и подчеркивания на дефисы
    .toLowerCase(); // Преобразуем всю строку в нижний регистр
