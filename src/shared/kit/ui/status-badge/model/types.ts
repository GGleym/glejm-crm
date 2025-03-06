export enum BadgeStatus {
  /** Новый */
  NEW = 'NEW',
  /** В работе */
  PROCESS = 'PROCESS',
  /** Готов */
  READY = 'READY',
  /** Выполнен */
  COMPLETE = 'COMPLETE',
  /** Отклонен */
  REJECT = 'REJECT',
  /** Отменен */
  CANCEL = 'CANCEL',
  /** Черновик */
  DRAFT = 'DRAFT',
  /** Ошибка */
  ERROR = 'ERROR',
  /** По умолчанию */
  DEFAULT = 'DEFAULT',
}

export type Config = {
  [status: string]: string;
};
