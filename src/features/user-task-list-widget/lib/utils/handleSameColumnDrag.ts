import {type ColumnProps} from '../../model';
import {reorderList} from './reorderList';

export const handleSameColumnDrag = (
  prevColumns: ColumnProps[],
  columnId: string,
  sourceIndex: number,
  destinationIndex: number,
) => {
  const column = prevColumns.find(({id}) => id === columnId);

  if (!column) {
    return prevColumns;
  }

  const reorderedList = reorderList(column, sourceIndex, destinationIndex);

  return prevColumns.map((item) => (item.id === columnId ? reorderedList : item));
};
