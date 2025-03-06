import {Flex, Text, granatLightTheme, TitlePrimary, Icon} from '@mtsdengi/uikit-fintech';

import {TableColumn} from '~/kit/ui/table/model';

import {Task} from './types';
import {events} from '.';

export const TASKS: Task[] = [
  {
    id: '1',
    creationDate: '03.08.2024',
    daysOverdue: '-3 дня',
    priority: 'medium',
    name: 'Такси',
    client: 'Михайлов К.С.',
    status: 'overdue',
    deadline: '22.12.2023',
    attachments: 0,
    comments: 1,
  },
  {
    id: '2',
    creationDate: '01.08.2024',
    deadline: '22.12.2023',
    daysOverdue: '-5 дней',
    taskDescription: 'Описание таски',
    priority: 'high',
    name: 'Такси',
    client: 'Снегирёв Ф.К.',
    status: 'overdue',
    attachments: 9,
    comments: 9,
  },
  {
    id: '3',
    creationDate: '11.08.2024',
    priority: 'high',
    deadline: '22.12.2023',
    name: 'Какая-то сложная таска с длинным названием',
    client: 'Чумакова С.М.',
    status: 'pending',
    attachments: 4,
    comments: 1,
  },
];

export const COLUMNS: TableColumn<Task>[] = [
  {
    id: 'status',
    header: 'Статус',
    renderCell: (value, item) => {
      const labels = {
        overdue: 'Просрочена',
        pending: 'Ожидает выполнения',
        inProgress: 'В работе',
        completed: 'Выполнена',
      };

      return (
        labels[value as keyof typeof labels] && (
          <Flex flexDirection="column">
            <Text font="p4RegularText">{labels[value as keyof typeof labels]}</Text>
            {item.daysOverdue && (
              <Text font="p4RegularText" color={granatLightTheme.colors.accent.negative}>
                Просрочена
              </Text>
            )}
          </Flex>
        )
      );
    },
  },
  {
    id: 'priority',
    renderHeading: () => (
      <TitlePrimary
        customPadding="0"
        title="Приоритет"
        actionButton={
          <div onClick={() => events.onPriorityChangedEvent({sortParam: 'priority'})}>
            <Icon iconPath="granat/sort/size-16-style-outline" color={granatLightTheme.colors.icons.secondary} />
          </div>
        }
      />
    ),
    renderCell: (value) => {
      switch (value) {
        case 'high':
          return (
            <Flex gap={granatLightTheme.spacings.s4} alignItems="center">
              <Icon iconPath="granat/chevron-up/size-16-style-outline" />
              <Text font="p4RegularText">Высокий</Text>
            </Flex>
          );
        case 'medium':
          return (
            <Flex gap={granatLightTheme.spacings.s4} alignItems="center">
              <Icon iconPath="granat/chevron-down/size-16-style-outline" />
              <Text font="p4RegularText">Средний</Text>
            </Flex>
          );
      }
    },
  },
  {
    id: 'name',
    header: 'Тема и описание',
    renderCell: (value, item) => (
      <Flex flexDirection="column">
        <Text font="p4RegularText">{value}</Text>
        {item.taskDescription && (
          <Text color={granatLightTheme.colors.text.secondary} font="p4RegularComp">
            {item.taskDescription}
          </Text>
        )}
      </Flex>
    ),
  },
  {
    id: 'creationDate',
    header: 'Дата создания',
    renderCell: (value) => <Text font="p4RegularText">{value}</Text>,
  },
  {
    id: 'deadline',
    header: 'Сроки выполнения',
    renderCell: (value) => <Text font="p4RegularText">{value}</Text>,
  },
];
