import {TableCell} from './table-cell';

import {type TableColumn} from '../model';
import {Styled} from '../styled';

type TableRowProps<Entity> = {
  /** Список колонок */
  columns: TableColumn<Entity>[];
  /** Строка */
  row?: Entity;
  /** Признак хедера */
  isHeader?: boolean;
  /** Хендлер клика на строку */
  onClick?: () => void;
  /** Признак наличия разделителя */
  hasDivider?: boolean;
};

export function TableRow<Entity>({columns, row, isHeader = false, onClick, hasDivider}: TableRowProps<Entity>) {
  return (
    <Styled.Row onClick={onClick} hasDivider={hasDivider} hoverable={!isHeader}>
      {columns.map((column) => (
        <TableCell key={column.id} column={column} row={row} isHeader={isHeader} />
      ))}
    </Styled.Row>
  );
}
