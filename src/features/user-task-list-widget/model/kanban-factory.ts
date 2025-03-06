import {createFactory} from '@withease/factories';
import {createEvent, createStore, sample} from 'effector';
import {v4 as uuid} from 'uuid';

import {moveCard, reorderList} from '../lib/utils';

import {COLUMNS_DATA} from './__MOCK__';
import type {CardEvent, ColumnProps, Task} from './types';

export const createKanbanFactory = createFactory(() => {
  const cardCreateClicked = createEvent<{card: Omit<Task, 'id'>; columnId: string}>();
  const cardEditClicked = createEvent<CardEvent & {card: Task}>();
  const cardDeleteClicked = createEvent<CardEvent>();
  const cardArchiveClicked = createEvent<CardEvent>();
  const cardCopyClicked = createEvent<CardEvent>();
  const cardMoved = createEvent<{
    fromColumnId: string;
    toColumnId: string;
    fromIndex: number;
    toIndex: number;
  }>();
  const cardMovedInTheColumn = cardMoved.filter({
    fn: ({fromColumnId, toColumnId}) => fromColumnId === toColumnId,
  });
  const cardMovedToAnotherColumn = cardMoved.filter({
    fn: ({fromColumnId, toColumnId}) => fromColumnId !== toColumnId,
  });

  const $board = createStore<ColumnProps[]>(COLUMNS_DATA);

  sample({
    clock: cardCreateClicked,
    source: $board,
    fn: (board, {card, columnId}) => {
      const updatedBoard = board.map((column) => {
        if (column.id === columnId) {
          const newCard = {...card, id: uuid()};

          return {...column, tasks: [newCard, ...column.tasks]};
        }

        return column;
      });

      return updatedBoard;
    },
    target: $board,
  });

  sample({
    clock: cardEditClicked,
    source: $board,
    fn: (board, {columnId, card, cardId}) => {
      const updatedBoard = board.map((column) => {
        if (column.id === columnId) {
          const updatedCards = column.tasks.map((existingCard) => {
            if (existingCard.id === cardId) {
              return {...existingCard, ...card};
            }

            return existingCard;
          });

          return {...column, tasks: updatedCards};
        }

        return column;
      });

      return updatedBoard;
    },
    target: $board,
  });

  sample({
    clock: cardDeleteClicked,
    source: $board,
    fn: (board, {columnId, cardId}) => {
      const updatedBoard = board.map((column) => {
        if (column.id === columnId) {
          const updatedCards = column.tasks.filter((card) => card.id !== cardId);

          return {...column, tasks: updatedCards};
        }

        return column;
      });

      return updatedBoard;
    },
    target: $board,
  });

  sample({
    clock: cardMovedInTheColumn,
    source: $board,
    fn: (board, {fromColumnId, fromIndex, toIndex}) => {
      const updatedBoard = board.map((column) => {
        if (column.id === fromColumnId) {
          const updatedList = reorderList(column, fromIndex, toIndex);

          return updatedList;
        }

        return column;
      });

      return updatedBoard;
    },
    target: $board,
  });

  sample({
    clock: cardMovedToAnotherColumn,
    source: $board,
    fn: (board, {fromColumnId, toColumnId, fromIndex, toIndex}) =>
      moveCard(board, fromColumnId, toColumnId, fromIndex, toIndex),
    target: $board,
  });

  return {
    events: {
      cardCreateClicked,
      cardEditClicked,
      cardArchiveClicked,
      cardMoved,
      cardCopyClicked,
    },

    stores: {
      $board,
    },
  };
});
