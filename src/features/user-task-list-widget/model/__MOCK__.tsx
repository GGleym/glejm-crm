import {Icon} from '@mtsdengi/uikit-fintech';

import {type ColumnProps} from './types';

export const COLUMNS_DATA: ColumnProps[] = [
  {
    id: 'current',
    title: 'Текущие',
    tasks: [
      {
        id: 'ds9735442964',
        title: 'Звонок по кредитной заявке №ds9735442964',
        priority: 'Низкий',
        clientName: 'Парфенов Дмитрий Вячеславович',
        executor: 'Казаков Антон Васильевич',
        attributes: [
          {
            icon: <Icon iconPath="granat/timer/size-24-style-outline" />,
            type: 'time',
            value: '09:00 — 10:00',
          },
        ],
      },
      {
        id: 'meeting1',
        title: 'Встреча с клиентом',
        priority: 'Высокий',
        clientName: 'Авдеева Агата Максимовна',
        executor: 'Спиридонова Елизавета Егоровна',
        attributes: [
          {
            icon: <Icon iconPath="granat/timer/size-24-style-outline" />,
            type: 'time',
            value: '11:00 — 12:00',
          },
          {
            icon: <Icon iconPath="granat/timer/size-24-style-outline" />,
            type: 'location',
            value: "Малый Кисловский пер., 9, стр. 1, кафе 'Dobryakova Ba...'",
          },
        ],
      },
      {
        id: 'birthday1',
        title: 'Поздравить с днем рождения, 56 лет',
        priority: 'Средний',
        clientName: 'Череззаборногузадерищенский Константин Вениаминович',
        executor: 'Ефимов Илья Александрович',
        attributes: [
          {
            icon: <Icon iconPath="granat/timer/size-24-style-outline" />,
            type: 'time',
            value: 'весь день',
          },
        ],
      },
      {
        id: 'docs1',
        title: 'Отправить документы курьером',
        priority: 'Высокий',
        clientName: 'Грудзин Александр Сергеевич',
        executor: 'Егорова Ксения Алиевна',
        attributes: [
          {
            icon: <Icon iconPath="granat/timer/size-24-style-outline" />,
            type: 'time',
            value: '11:00 — 12:00',
          },
          {
            icon: <Icon iconPath="granat/timer/size-24-style-outline" />,
            type: 'location',
            value: "Малый Кисловский пер., 9, стр. 1, кафе 'Dobryakova Ba..'",
          },
        ],
      },
    ],
  },
  {
    id: 'planned',
    title: 'Запланированные',
    tasks: [
      {
        id: 'meeting2',
        title: 'Встреча с клиентом',
        priority: 'Высокий',
        clientName: 'Авдеева Агата Максимовна',
        executor: 'Спиридонова Елизавета Егоровна',
        attributes: [
          {
            type: 'time',
            value: '11:00 — 12:00',
            icon: <Icon />,
          },
          {
            type: 'location',
            value: "Малый Кисловский пер., 9, стр. 1, кафе 'Dobryakova Ba...'",
            icon: <Icon />,
          },
        ],
      },
      {
        id: 'ds9735442641',
        title: 'Звонок по кредитной заявке №ds9735442641',
        priority: 'Средний',
        clientName: 'Прокофьева София Андреевна',
        executor: 'Дьяконов Арсений Михайлович',
        attributes: [
          {
            type: 'time',
            value: '11:00 — 12:00',
            icon: <Icon />,
          },
        ],
      },
      {
        id: 'birthday2',
        title: 'Поздравить с днем рождения, 52 года',
        priority: 'Высокий',
        clientName: 'Христорождественская Апполинария Сталинославовна',
        executor: 'Новиков Александр Даниэльевич',
        attributes: [
          {
            type: 'time',
            value: '11:00 — 12:00',
            icon: <Icon />,
          },
        ],
      },
      {
        id: 'product1',
        title: 'Предложить новый продукт',
        priority: 'Низкий',
        clientName: 'Христорождественская Апполинария Сталинославовна',
        executor: '',
        attributes: [
          {
            type: 'time',
            value: '11:00 — 12:00',
            icon: <Icon />,
          },
        ],
      },
    ],
  },
  {
    id: 'overdue',
    title: 'Просроченные',
    tasks: [
      {
        id: 'meeeeting',
        title: 'Звонок по кредитной заявке',
        priority: 'Высокий',
        clientName: 'Авдеева Агата Максимовна',
        executor: 'Спиридонова Елизавета Егоровна',
        attributes: [
          {
            type: 'time',
            value: '11:00 — 12:00',
            icon: <Icon />,
          },
          {
            type: 'location',
            value: "Малый Кисловский пер., 9, стр. 1, кафе 'Dobryakova Ba...'",
            icon: <Icon />,
          },
        ],
      },
      {
        id: 'meeeeeting3',
        title: 'Звонок по кредитной заявке',
        priority: 'Высокий',
        clientName: 'Авдеева Агата Максимовна',
        executor: 'Спиридонова Елизавета Егоровна',
        attributes: [
          {
            type: 'time',
            value: '11:00 — 12:00',
            icon: <Icon />,
          },
          {
            type: 'location',
            value: "Малый Кисловский пер., 9, стр. 1, кафе 'Dobryakova Ba...'",
            icon: <Icon />,
          },
        ],
      },
    ],
  },
];
