import {v4 as uuidv4} from 'uuid';
import {Icon} from '@mtsdengi/uikit-fintech';
import {UserTaskListWidget} from '~/features/user-task-list-widget';
import {Client} from '~/pages/client-page/ui';

export const MENU_OPTIONS = [
  {
    id: uuidv4(),
    label: 'Главная',
    icon: <Icon iconPath="granat/home/size-24-style-outline" />,
  },
  {
    id: uuidv4(),
    label: 'Задачи',
    icon: <Icon iconPath="granat/check-circle/size-24-style-outline" />,
    content: (
      <UserTaskListWidget
        tabs={[
          {
            id: 'appointed',
            text: 'Назначенные',
          },
          {
            id: 'createByMe',
            text: 'Созданные мной',
          },
        ]}
      />
    ),
  },
  {
    id: uuidv4(),
    label: 'Клиенты',
    icon: <Icon iconPath="granat/contacts/size-24-style-outline" />,
    content: <Client />,
  },
  {
    id: uuidv4(),
    label: 'Заявки',
    icon: <Icon iconPath="granat/shopping-cart/size-24-style-outline" />,
  },
  {
    id: uuidv4(),
    label: 'Обращения',
    icon: <Icon iconPath="granat/announcement/size-24-style-outline" />,
  },
  {
    id: uuidv4(),
    label: 'Аналитика',
    icon: <Icon iconPath="granat/statistics/size-24-style-outline" />,
  },
];
