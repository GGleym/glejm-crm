/**
 * Модель статусов кредитной заявки.
 */
export enum LoanApplicationStatus {
  /** Новая */
  NEW = 'NEW',
  /** В работе */
  IN_PROCESS = 'IN_PROCESS',
  /** Закрыта */
  COMPLETE = 'COMPLETE',
  /** Отказ банка */
  BANK_REJECT = 'BANK_REJECT',
  /** Отказ клиента */
  CLIENT_CANCEL = 'CLIENT_CANCEL',
  /** Черновик */
  DRAFT = 'DRAFT',
  /** Индикатор по умолчанию для значений, которых нет в таблице */
  DEFAULT = 'DEFAULT',
}

export type LoanFilterByParticipant = {
  /** Серия и номер паспорта */
  clientIdentDoc?: string;
  /** Идентификатор клиента в ИС */
  bankClients?: {
    /** Код ИС */
    systemCode: string;
    /** Идентификатор клиента в ИС */
    clientId: string;
  };
};

export type LoanApplicationsFilter = {
  /** Фильтры по участнику заявки */
  participantFilter: LoanFilterByParticipant;
};

export type ShortApplication = {
  /** Идентификатор заявки. */
  id: string;
  /** Номер заявки. */
  number: string;
  /** Код канала выдачи. */
  channel: string;
  /** Транслит кода канала выдачи. */
  channelName: string;
  /** Дата создания заявки. */
  createDate: string;
  /** Последняя дата изменения заявки. */
  lastUpdateDate: string;
  /** Тип продукта. */
  product: string;
  /** ФИО клиента. */
  client: string;
  /** Статус заявки. */
  status: string;
  /** Стадия заявки. */
  stage: string;
  /** Код статуса заявки. */
  statusCode: LoanApplicationStatus;
  /** Код стадии заявки. */
  stageCode: string;
  /** Показатель, является продукт на доставку или получение в ДО. */
  delivery: boolean;
  /** Тип выдачи продукта. */
  issueType: string;
  /** Причина отказа. */
  rejectReasonName: string;
  /** Фамилия клиента. */
  lastName: string;
  /** Имя клиента. */
  firstName: string;
  /** Отчество клиента. */
  secondName: string;
};
