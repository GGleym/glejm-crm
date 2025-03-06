/** Способы связи с клиентом */
export enum Contact {
  /** Email */
  email = 'email',
  /** Чат */
  chat = 'chat',
  /** Телеграм */
  tg = 'tg',
  /** Телефония */
  telephony = 'telephony',
}

/** Аттрибуты клиента */
export enum ClientTag {
  /** Премиальный клиент */
  vip = 'vip',
  /** Зарплатный проект */
  salary = 'salary',
  /** Уникальный аттрибут (может быть у премиальных клиентов) */
  custom = 'custom',
}
