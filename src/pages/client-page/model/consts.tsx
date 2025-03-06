import {Badge, granatLightTheme} from '@mtsdengi/uikit-fintech';

import {type TableColumn} from '~/kit/ui/table/model';

import {type UnknownObject} from '~/types/common';

export const NOT_FOUND_CLIENTS_CODES = [400, 404];
export const DOCUMENTS_TYPES_MAPPER = {
  PASSPORT: 'Паспорт РФ',
  UNKNOWN: 'Неизвестно',
} as const;

export const ACCOUNTS_COLUMNS: TableColumn<UnknownObject>[] = [
  {
    id: 'status',
    header: 'Статус счета',
    renderCell: (status) => (
      <Badge
        textColor="white"
        backgroundColor={
          ['Закрыт', 'К закрытию'].includes(status as string)
            ? granatLightTheme.colors.accent.negative
            : granatLightTheme.colors.accent.positive
        }
      >
        {status as string}
      </Badge>
    ),
  },
  {id: 'type', header: 'Тип продукта и наименование'},
  {id: 'accountNumber', header: 'Номер счета'},
  {id: 'rate', header: 'Ставка, %'},
  {id: 'openDate', header: 'Дата открытия'},
  {id: 'balance', header: 'Баланс в валюте счета'},
];

export const CARDS_COLUMNS: TableColumn<UnknownObject>[] = [
  {
    id: 'status',
    header: 'Статус счета',
    renderCell: (status) => (
      <Badge
        textColor="white"
        backgroundColor={
          status === 'Закрыта' ? granatLightTheme.colors.accent.negative : granatLightTheme.colors.accent.positive
        }
      >
        {status as string}
      </Badge>
    ),
  },
  {id: 'type', header: 'Тариф и тип карты'},
  {id: 'cardNumber', header: 'Номер карты'},
  {id: 'issueDate', header: 'Дата выдачи'},
  {id: 'cardAccount', header: 'Счет карты'},
  {id: 'balance', header: 'Баланс карты'},
];

export const LOANS_COLUMNS: TableColumn<UnknownObject>[] = [
  {
    id: 'status',
    header: 'Статус счета',
    renderCell: (status) => (
      <Badge
        textColor="white"
        backgroundColor={
          status === 'Закрытый' ? granatLightTheme.colors.accent.negative : granatLightTheme.colors.accent.positive
        }
      >
        {status as string}
      </Badge>
    ),
  },
  {id: 'name', header: 'Наименование'},
  {id: 'accountNumber', header: 'Номер счета'},
  {id: 'rate', header: 'Ставка, %'},
  {id: 'openDate', header: 'Дата открытия'},
  {id: 'balance', header: 'Баланс в валюте счета'},
];

export const INVEST_COLUMNS: TableColumn<UnknownObject>[] = [
  {
    id: 'status',
    header: 'Статус счета',
    renderCell: (status) => (
      <Badge
        textColor="white"
        backgroundColor={
          status === 'Закрыт' ? granatLightTheme.colors.accent.negative : granatLightTheme.colors.accent.positive
        }
      >
        {status as string}
      </Badge>
    ),
  },
  {id: 'type', header: 'Тариф и тип карты'},
  {id: 'openDate', header: 'Дата открытия'},
  {id: 'period', header: 'Срок действия'},
  {id: 'balance', header: 'Сумма'},
];
