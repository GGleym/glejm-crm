export type BankClientSystem = {
  /** Код, идентифицирующий систему */
  systemCode: string;
  /** ID клиента в системе */
  clientId: string;
};

export type IndividualsQueryRes = {
  /** Тип сущности */
  type: 'PERSON';
  /** Полное имя человека */
  name: string;
  /** Имя человека */
  firstName: string;
  /** Фамилия человека */
  lastName: string;
  /** Отчество человека */
  secondName: string;
  /** Номер телефона человека */
  phone: string;
  /** Адрес электронной почты человека */
  email: string;
  /** Дата рождения в формате ISO (ГГГГ-ММ-ДД) */
  dateOfBirth: string;
  /** Указывает, полностью ли идентифицирован человек */
  isFullyIdent: boolean;
  /** Тип документа, удостоверяющего личность */
  identityDocumentType: string;
  /** Серия документа, удостоверяющего личность */
  identityDocumentSeries: string;
  /** Номер документа, удостоверяющего личность */
  identityDocumentNumber: string;
  /** Категория в системе RBO */
  rboCategory: string;
  /** Название категории RBO */
  rboCategoryName: string;
  /** Указывает, доступен ли человек */
  available: boolean;
  /** Название услуги */
  serviceName: string;
  /** Массив банковских клиентских систем, связанных с человеком */
  bankClients: BankClientSystem[];
  /** Уникальный идентификатор процесса */
  processId: string;
  /** Комментарий */
  comment: string;
};
