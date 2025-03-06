import {type ReactNode} from 'react';

export type TableColumn<Entity> = {
  /** ID колонки */
  id: string;
  /** Render prop для колонки */
  renderCell?: (value: unknown, row: Entity) => ReactNode;
} & (
  | {
      /** Заголовок колонки */
      header: string;
      /** Render prop для заголовка */
      renderHeading?: () => ReactNode;
    }
  | {
      /** Render prop для заголовка */
      renderHeading: () => ReactNode;
      /** Заголовок колонки */
      header?: string;
    }
);
