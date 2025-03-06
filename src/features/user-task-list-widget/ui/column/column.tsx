import {Droppable} from '@hello-pangea/dnd';

import {Spacer} from '@mtsbank/ui-kit';
import {Button, Flex, granatLightTheme, Text} from '@mtsdengi/uikit-fintech';

import {ColumnProps} from '../../model';

import {Card} from '../card';
import {Styled} from './styled';

export const Column = ({id, title, tasks}: ColumnProps) => (
  <div>
    <Flex alignItems="center" justifyContent="space-between">
      <Text font="h3Comp">{title}</Text>
      <Button variant="secondary" size={32}>
        Фильтры
      </Button>
    </Flex>
    <Spacer space={granatLightTheme.spacings.s16} />
    <Droppable droppableId={id}>
      {({innerRef, droppableProps, placeholder}) => (
        <Styled.TasksWrapper {...droppableProps} ref={innerRef}>
          {tasks.map((task, index) => (
            <Card {...task} key={task.id} index={index} />
          ))}
          {placeholder}
        </Styled.TasksWrapper>
      )}
    </Droppable>
  </div>
);
