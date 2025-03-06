/**
 * Представляет полную информацию о сервисном классе клиента
 */
export type ServicesRes = {
  /** Информация о сервисном классе */
  serviceClass: ServiceClass;
  /** Список доступных сервисов */
  services: Service[];
  /** Список привилегий */
  privileges: Privilege[];
  /** Финансовая информация */
  financials: Financials;
};

/**
 * Представляет информацию о сервисном классе
 */
type ServiceClass = {
  /** Тип сервиса */
  serviceType: string;
  /** Название уровня сервиса */
  levelName: string | null;
  /** Минимальный баланс для сервисного класса */
  minBalance: number;
  /** Стоимость сервисного класса */
  cost: number;
};

/**
 * Представляет информацию о сервисе
 */
type Service = {
  /** Код сервиса */
  code: string;
  /** Значение сервиса */
  value: string;
  /** Теги сервиса */
  tags: string[];
};

/**
 * Представляет информацию о привилегии
 */
type Privilege = {
  /** Код привилегии */
  code: string;
  /** Значение привилегии */
  value: PrivilegeValue;
  /** Теги привилегии */
  tags: string[];
};

/**
 * Представляет значение привилегии
 */
type PrivilegeValue = {
  /** Название привилегии */
  name: string;
  /** Период действия привилегии */
  period: string;
  /** Количество предоставленных единиц привилегии */
  granted: string;
  /** Количество использованных единиц привилегии */
  used: string;
  /** Количество оставшихся единиц привилегии */
  left: string;
};

/**
 * Представляет финансовую информацию
 */
type Financials = {
  /** Последний суммарный баланс */
  lastSumBalance: number;
  /** Текущий суммарный баланс */
  currentSumBalance: number;
  /** Текущая сумма транзакций */
  currentSumTransactions: number;
  /** Последняя сумма транзакций */
  lastSumTransactions: number;
  /** Текущая сумма кредитных транзакций */
  currentCreditSumTransactions: number;
  /** Последняя сумма кредитных транзакций */
  lastCreditSumTransactions: number;
  /** Прогнозируемый суммарный баланс */
  prognosisSumBalance: number;
  /** Список СМО (система мониторинга операций) */
  smo: SMO[];
};

/**
 * Представляет информацию о СМО (система мониторинга операций)
 */
type SMO = {
  /** Дата расчета */
  calculateDate: string;
  /** Детальная информация о СМО */
  smoDetail: string;
  /** Текущий баланс */
  currentBalance: number;
  /** Баланс СМО */
  smoBalance: number;
  /** Предыдущий баланс СМО */
  smoLastBalance: number;
  /** Валюта */
  currency: string;
};

/**
 * Представляет информацию о пакетах услуг клиента
 */
export type ServicePackagesRes = {
  /** Список пакетов услуг */
  packages: Package[];
  /** Флаг наличия дополнительных пакетов */
  hasMore: boolean;
};

/**
 * Представляет информацию о пакете услуг
 */
export type Package = {
  /** Уникальный идентификатор пакета */
  id: number;
  /** Название пакета услуг */
  name: string;
  /** Дата и время открытия пакета */
  openDateTime: string;
  /** Дата и время закрытия пакета (если применимо) */
  closeDateTime: string | null;
  /** Продолжительность действия пакета в секундах */
  lifetimeTimestamp: number;
  /** Имя сотрудника, открывшего пакет */
  openerName: string | null;
  /** Имя сотрудника, закрывшего пакет (если применимо) */
  closerName: string | null;
  /** Категория клиента */
  clientCategory: string;
  /** Имя менеджера, обслуживающего пакет */
  managerName: string;
};

export type PackageInfo = {
  /** Название пакета */
  name: string;
  /** Информация о пакете */
  info: {
    /** Идентификатор опции */
    id: string;
    /** Подпись опции */
    label: string;
    /** Значение опции */
    caption: string;
  }[];
};
