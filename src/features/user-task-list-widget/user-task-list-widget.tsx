import {useState} from 'react';
import {createPortal} from 'react-dom';

import {useUnit} from 'effector-react';

import {Button, Flex, granatLightTheme, Icon, Tab, TabProps, Tabs} from '@mtsdengi/uikit-fintech';
import {Spacer} from '@mtsbank/ui-kit';

import {TaskHeader} from './ui/task-header';
import {Kanban} from './ui/kanban';
import {TasksList} from './ui/tasks-list';
import {CreateTaskOverlay} from './ui/create-task-overlay';

import {events, stores} from './model';

type UserTaskListWidgetProps = {
  /** Список табов */
  tabs: TabProps[];
};

export const UserTaskListWidget = ({tabs}: UserTaskListWidgetProps) => {
  const [isTaskModalOpened, taskView] = useUnit([stores.$isTaskModalOpened, stores.$taskView]);
  const [activeTab, setActiveTab] = useState<string | undefined>(tabs[0].id);

  return (
    <>
      <TaskHeader
        currentView={taskView}
        onTasksViewChanged={events.onTasksViewChangedEvent}
        onTaskAdded={events.onOpenTaskModalEvent}
      />
      <Spacer space={granatLightTheme.spacings.s16} />

      <Flex alignItems="flex-end" justifyContent="space-between">
        <Tabs type="stroke" size={52} activeTab={activeTab} onActiveTabChange={setActiveTab}>
          {tabs.map(({id, text, withArrow}) => (
            <Tab key={id} text={text} id={id} withArrow={withArrow} />
          ))}
        </Tabs>
        <Button
          variant="secondary"
          size={32}
          iconPosition="right"
          icon={<Icon iconPath="granat/download/size-16-style-outline" />}
        >
          Экспорт в Excel
        </Button>
      </Flex>

      <Spacer space={granatLightTheme.spacings.s32} />

      {taskView === 'kanban' ? <Kanban /> : <TasksList />}

      {isTaskModalOpened &&
        createPortal(
          <CreateTaskOverlay isOpen={isTaskModalOpened} onClose={events.onCloseTaskModalEvent} />,
          document.body,
        )}
    </>
  );
};
