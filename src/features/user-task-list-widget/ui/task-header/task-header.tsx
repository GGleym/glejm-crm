import {useState} from 'react';

import {Spacer} from '@mtsbank/ui-kit';
import {
  Button,
  Cell,
  Dropdown,
  Flex,
  granatLightTheme,
  Text,
  Icon,
  SegmentedControl,
  SegmentedControlItem,
  InputDate,
  ButtonIcon,
} from '@mtsdengi/uikit-fintech';

import {TASK_VIEWS} from './model';
import {Styled} from './styled';

const ITEMS = [
  {text: 'Option 1', value: '1'},
  {text: 'Option 2', value: '2'},
  {text: 'Option 3', value: '3'},
  {text: 'Option 4', value: '4'},
  {text: 'Option 5', value: '5'},
];

type TaskHeaderProps = {
  /** Хендлер клика на кнопку "Создать задачу" */
  onTaskAdded: () => void;
  /** Текущий вид задач */
  currentView: 'kanban' | 'list';
  /** Хендлер смены вида задач */
  onTasksViewChanged: (type: 'kanban' | 'list') => void;
};

export const TaskHeader = ({onTaskAdded, onTasksViewChanged, currentView = 'kanban'}: TaskHeaderProps) => {
  const [value, setValue] = useState('');
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Flex gap={24} justifyContent="space-between" alignItems="flex-start">
        <Text font="h3Comp">Задачи</Text>
        <Flex gap={16} alignItems="center">
          <SegmentedControl fluid size={32}>
            {TASK_VIEWS.map(({id, icon}) => (
              <SegmentedControlItem key={id} active={id === currentView} onChange={() => onTasksViewChanged(id)}>
                {/* TODO: Исправить тип детей в ките. Вместо string умеем передавать ReactNode */}
                {icon as unknown as string}
              </SegmentedControlItem>
            ))}
          </SegmentedControl>
          <Button
            size={32}
            variant="primary"
            iconPosition="right"
            icon={<Icon iconPath="granat/plus/size-16-style-outline" />}
            onClick={onTaskAdded}
          >
            Создать задачу
          </Button>
        </Flex>
      </Flex>
      <Spacer space={granatLightTheme.spacings.s24} />
      <Styled.FilterWrapper>
        <Dropdown
          open={opened}
          onButtonClick={() => setOpened((opened) => !opened)}
          inputProps={{
            value,
            onClick: () => setOpened((opened) => !opened),
            label: 'Название задачи',
            placeholder: 'Выберите из списка',
          }}
        >
          <Styled.List role="list">
            {ITEMS.map((item) => (
              <Cell
                key={item.text}
                label={item.text}
                onClick={() => {
                  setValue(item.text);
                  setOpened(false);
                }}
              />
            ))}
          </Styled.List>
        </Dropdown>
        <InputDate label="Дата или период постановки" placeholder="дд.мм.гггг - дд.мм.гггг" />
        <ButtonIcon size={44} variant="secondary">
          <Icon iconPath="granat/reset-settings/size-24-style-outline" />
        </ButtonIcon>
      </Styled.FilterWrapper>
    </>
  );
};
