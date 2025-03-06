import {type ReactNode} from 'react';

import {Text} from '@mtsdengi/uikit-fintech';

import {type TableColumn} from '../model';
import {Styled} from '../styled';

type TableCellProps<Entity> = {
  /** Колонка */
  column: TableColumn<Entity>;
  /** Строка */
  row?: Entity;
  /** Признак хедера */
  isHeader?: boolean;
};

export function TableCell<Entity>({column, row, isHeader = false}: TableCellProps<Entity>) {
  if (isHeader) {
    return (
      <Styled.Header>
        {column.renderHeading ? column.renderHeading() : <Text font="p4MediumComp">{column.header || ''}</Text>}
      </Styled.Header>
    );
  }

  return (
    <Styled.Cell id={column.id}>
      {column.renderCell && row ? (
        column.renderCell(row[column.id as keyof Entity], row)
      ) : (
        <Text font="p4RegularText">{row?.[column.id as keyof Entity] as ReactNode}</Text>
      )}
    </Styled.Cell>
  );
}
