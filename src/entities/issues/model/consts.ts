import {type TableColumn} from '~/kit/ui/table/model';

import {type UnknownObject} from '~/types/common';

export const DEFAULT_LIMIT = 12;
export const DEFAULT_OFFSET = 0;
export const DEFAULT_OFFSET_STEP = 12;

export const DEFAULT_LOAN_APPLICATIONS_REQUEST = {
  limit: DEFAULT_LIMIT,
  offset: DEFAULT_OFFSET,
};

export const LOAN_APPLICATIONS_COLUMNS: TableColumn<UnknownObject>[] = [
  {
    id: 'number',
    header: '№ заявки',
  },
  {
    id: 'product',
    header: 'Продукт',
  },
  {
    id: 'channelName',
    header: 'Канал поступления',
  },
  {
    id: 'issueType',
    header: 'Способ выдачи',
  },
  {
    id: 'createDate',
    header: 'Создана/Изменена',
  },
  {
    id: 'status',
    header: 'Статус и стадия',
  },
];
