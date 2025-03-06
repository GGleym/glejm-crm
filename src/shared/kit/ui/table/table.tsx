import {type Key} from 'react';

import {type UnknownObject} from '~/types/common';

import {TableRow} from './ui';
import {TableColumn} from './model';

import {Styled} from './styled';

export type TableProps<Entity extends UnknownObject = Record<string, string>> = {
  /** Данные таблицы */
  data: Entity[];
  /** Список колонок */
  columns: TableColumn<Entity>[];
  /** Цвет заднего фона таблицы  */
  background?: string;
  /**
   * Признак наличия border у таблицы
   *
   * По дефолту true
   */
  hasBorder?: boolean;
  /** Высота тела таблицы */
  bodyHeight?: number;
  /** Хендлер клика на строку */
  onRowClick?: (item: Entity) => void;
};

export function Table<Entity extends UnknownObject>({
  data,
  columns,
  background,
  onRowClick,
  bodyHeight = 240,
  hasBorder = true,
}: TableProps<Entity>) {
  return (
    <Styled.Table cellSpacing={0} cellPadding={0} $background={background} $hasBorder={hasBorder}>
      <Styled.Head>
        <TableRow isHeader columns={columns} />
      </Styled.Head>
      <Styled.Body $bodyHeight={bodyHeight}>
        {data.map((row, index) => (
          <TableRow
            key={row.id as Key}
            columns={columns}
            row={row}
            onClick={() => onRowClick?.(row)}
            hasDivider={index < data.length - 1}
          />
        ))}
      </Styled.Body>
    </Styled.Table>
  );
}
