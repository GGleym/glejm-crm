import {type TableColumn} from '~/kit/ui/table/model';

import {type UnknownObject} from '~/types/common';

import {preparePrivilege} from './utils';

export const DECL_TITLES = {
  minutes: ['минута', 'минуты', 'минут'],
  hours: ['час', 'часа', 'часов'],
  days: ['день', 'дня', 'дней'],
  months: ['месяц', 'месяца', 'месяцев'],
};

export const PACKAGE_TABS = [
  {
    key: 'current',
    tabName: 'Действующий',
  },
  {
    key: 'connectionHistory',
    tabName: 'История подключений',
  },
];

export const PRIVILEGES_MAPPER = {
  concierge: 'Консьерж-сервис',
  telemedicine: 'Телемедицина',
  preferentialConversion: 'Льготная конвертация',
  cashback: 'Кешбэк',
};

export const PRIVILEGES_TABLE_COLUMNS: TableColumn<UnknownObject>[] = [
  {
    id: 'name',
    header: 'Название привилегии',
  },
  {
    id: 'period',
    header: 'Период',
  },
  {
    id: 'granted',
    header: 'Предоставлено',
    renderCell: (value) => preparePrivilege(value as string),
  },
  {
    id: 'used',
    header: 'Израсходовано',
    renderCell: (value) => preparePrivilege(value as string),
  },
  {
    id: 'left',
    header: 'Остаток',
    renderCell: (value) => preparePrivilege(value as string),
  },
];
