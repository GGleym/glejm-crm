import {type ColumnProps} from '../../model';

export const reorderList = (list: ColumnProps, startIndex: number, endIndex: number) => {
  const tasks = Array.from(list.tasks);
  const [removed] = tasks.splice(startIndex, 1);

  tasks.splice(endIndex, 0, removed);

  return {...list, tasks};
};
