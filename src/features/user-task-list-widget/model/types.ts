import {ReactNode} from 'react';

export type Attribute = {
  /** Тип аттрибута */
  type: 'time' | 'location';
  /** Значение атрибута */
  value: string;
  /** Иконка аттрибута */
  icon: ReactNode;
};

export type Task = {
  /** ID задачи */
  id: string;
  /** Заголовок задачи */
  title: string;
  /** Приоритет задачи */
  priority: string;
  /** Имя клиента */
  clientName: string;
  /** Имя исполнителя */
  executor: string;
  /** Список аттрибутов */
  attributes: Attribute[];
};

export type ColumnProps = {
  /** ID колонки */
  id: string;
  /** Заголовок колонки */
  title: string;
  /** Список задач */
  tasks: Task[];
};

export type CardEvent = {
  /** Идентификатор колонки */
  columnId: string;
  /** Идентификатор карточки */
  cardId: string;
};
