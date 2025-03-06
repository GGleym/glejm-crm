import {type ColumnProps} from '../../model';

export const moveCard = (
  widget: ColumnProps[],
  sourceColumnId: string,
  destinationColumnId: string,
  fromIndex: number,
  toIndex: number,
) => {
  const sourceColumnIndex = widget.findIndex(({id}) => id === sourceColumnId);
  const destinationColumnIndex = widget.findIndex(({id}) => id === destinationColumnId);

  const sourceColumn = widget[sourceColumnIndex];
  const destinationColumn = widget[destinationColumnIndex];

  const taskCard = sourceColumn.tasks[fromIndex];

  const updatedSourceColumn = {...sourceColumn, tasks: sourceColumn.tasks.filter((_, index) => index !== fromIndex)};
  const updatedDestinationColumn = {
    ...destinationColumn,
    tasks: [...destinationColumn.tasks.slice(0, toIndex), {...taskCard}, ...destinationColumn.tasks.slice(toIndex)],
  };

  return widget.map((column) => {
    if (column.id === sourceColumnId) {
      return updatedSourceColumn;
    }

    if (column.id === destinationColumnId) {
      return updatedDestinationColumn;
    }

    return column;
  });
};
