import {type UnknownObject} from './common';

export type SortingState = {
  /** Сортировка по убыванию/возрастанию (ASC/DESC) */
  order: string;
  /** Наименование поля сортировки */
  fieldName: string;
};

export type Paginate = {
  /** Количество элементов выборки */
  limit: number;
  /** Шаг отступа */
  offset: number;
};

export type RequestWithPagination<TFilter extends UnknownObject> = Paginate & {
  /** Фильтры кредитных заявок */
  filter?: TFilter;
  /** Сортировка */
  sort?: SortingState;
};
