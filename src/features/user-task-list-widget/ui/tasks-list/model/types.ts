export type Task = {
  /** ID */
  id: string;
  /** Дата создания задачи */
  creationDate: string;
  /** Приоритет */
  priority: 'high' | 'medium' | 'low';
  /** Название */
  name: string;
  /** Клиент */
  client: string;
  /** Статус */
  status: 'overdue' | 'pending' | 'inProgress' | 'completed';
  /** Вложения */
  attachments: number;
  /** Сроки выполнения задачи */
  deadline: string;
  /** Комментарии */
  comments: number;
  /** Описание задачи */
  taskDescription?: string;
  /** Просрочено */
  daysOverdue?: string;
  /** Дата закрытия */
  closeDate?: string;
};
