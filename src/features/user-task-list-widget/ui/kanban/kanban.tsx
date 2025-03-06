import {useUnit} from 'effector-react';

import {DragDropContext, OnDragEndResponder} from '@hello-pangea/dnd';

import {Column} from '../column';

import {events, stores} from '../../model';

import {Styled} from './styled';

export const Kanban = () => {
  const [board, onCardMove] = useUnit([stores.$board, events.cardMoved]);

  const onDragEnd: OnDragEndResponder = ({source, destination}) => {
    if (!destination) {
      return;
    }

    const {index: fromIndex, droppableId: fromColumnId} = source;
    const {index: toIndex, droppableId: toColumnId} = destination;

    onCardMove({fromColumnId, toColumnId, fromIndex, toIndex});
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Styled.Wrapper>
        {board.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </Styled.Wrapper>
    </DragDropContext>
  );
};
