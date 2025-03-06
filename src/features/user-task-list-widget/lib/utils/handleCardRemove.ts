import {type ColumnProps} from '../../model';

export const handleCardRemove = (prevTasks: ColumnProps['tasks'], idToRemove: string) =>
  prevTasks.filter(({id: taskId}) => taskId !== idToRemove);
