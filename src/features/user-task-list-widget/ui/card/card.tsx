import {Draggable} from '@hello-pangea/dnd';

import {Spacer, theme} from '@mtsbank/ui-kit';
import {Badge, Text, CheckboxRow, Flex} from '@mtsdengi/uikit-fintech';

import {type Task} from '../../model';
import {Styled} from './styled';

type CardProps = Task & {
  /** Индекс карточки (необходим для корректной работы DND) */
  index: number;
};

export const Card = ({id, index, title, clientName, priority, executor, attributes}: CardProps) => (
  <Draggable index={index} draggableId={id}>
    {({innerRef, dragHandleProps, draggableProps}) => (
      <Styled.Wrapper ref={innerRef} {...dragHandleProps} {...draggableProps} $completed={false}>
        <Flex gap={theme.spacings.xs3}>
          <CheckboxRow label={title} onChange={() => console.log(id, 'Card | onChange')} />
          {/* <Styled.Link href="#">{id}</Styled.Link> */}
        </Flex>
        <Spacer space={theme.spacings.xs3} />
        {priority && <Badge>{priority}</Badge>}
        <Spacer space={theme.spacings.xs2} />
        {clientName && (
          <Flex gap={8}>
            <Text color={theme.colors.neutral.g400}>Клиент:</Text>
            <Text color="blue">{clientName}</Text>
          </Flex>
        )}
        {executor && (
          <Flex gap={8}>
            <Text color={theme.colors.neutral.g400}>Исполнитель:</Text>
            <Text>{executor}</Text>
          </Flex>
        )}
        <Spacer space={theme.spacings.xs2} />
        <Styled.Attributes>
          {attributes.map(({type, value, icon}) => (
            <Styled.Attribute key={type}>
              <Styled.Icon>{icon}</Styled.Icon>
              <Text>{value}</Text>
            </Styled.Attribute>
          ))}
        </Styled.Attributes>
      </Styled.Wrapper>
    )}
  </Draggable>
);
