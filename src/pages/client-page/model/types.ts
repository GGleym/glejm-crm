/**
 * Представляет полную финансовую информацию клиента
 */
export type ProductsRes = {
  /** Список счетов клиента */
  accounts: Account[];
  /** Список карт клиента */
  cards: Card[];
  /** Список кредитов клиента */
  loans: Loan[];
  /** Список инвестиций клиента */
  investments: Investment[];
  /** Общие балансы по различным категориям */
  balances: Balances;
};

/**
 * Представляет информацию о банковском счете
 */
export type Account = {
  /** Тип счета */
  type: string;
  /** Название счета */
  name: string;
  /** Номер счета */
  number: string;
  /** Процентная ставка */
  rate: number;
  /** Текущий баланс */
  balance: number;
  /** Состояние счета */
  state: string;
  /** Код статуса счета */
  statusCode: string;
  /** Детальное описание статуса */
  statusDetail: string;
  /** Флаг блокировки счета */
  isBlocked: boolean;
  /** Флаг активности счета */
  isActive: boolean;
  /** Дата открытия счета */
  openDate: string;
  /** Дата закрытия счета (если применимо) */
  closeDate: string | null;
  /** Дата истечения срока действия (если применимо) */
  expireDate: string | null;
  /** Сумма соглашения */
  agreementAmount: number;
  /** Срок (если применимо) */
  term: number | null;
  /** Валюта счета */
  currency: string;
};

/**
 * Представляет информацию о банковской карте
 */
export type Card = {
  /** Уникальный идентификатор в системе RBO */
  rboId: string;
  /** Идентификатор связанного кредита (если есть) */
  bankLoanId: string | null;
  /** Тип карты */
  type: string;
  /** Тарифный план карты */
  tariff: string;
  /** Маскированный номер карты */
  pan: string;
  /** Состояние карты */
  state: string;
  /** Статус карты */
  status: string;
  /** Срок действия карты */
  validThru: string;
  /** Номер связанного счета */
  accountNumber: string;
  /** Текущий баланс */
  balance: number;
  /** Кредитный лимит (для кредитных карт) */
  creditLimit: number;
  /** Дата открытия карты */
  openDate: string;
  /** Дата закрытия карты (если применимо) */
  closeDate: string | null;
  /** Валюта карты */
  currency: string;
  /** Имя, эмбоссированное на карте */
  embossedName: string;
};

/**
 * Представляет информацию о кредите
 */
export type Loan = {
  /** Уникальный идентификатор в системе RBO */
  rboId: string;
  /** Номер кредитного соглашения */
  agreementNumber: string;
  /** Тип кредита */
  type: string;
  /** Название кредитного продукта */
  name: string;
  /** Номер кредитного счета */
  number: string;
  /** Процентная ставка */
  rate: number;
  /** Текущий баланс задолженности */
  balance: number;
  /** Состояние кредита */
  state: string;
  /** Флаг активности кредита */
  isActive: boolean;
  /** Флаг, указывающий на кредитную карту */
  isCard: boolean;
  /** Дата открытия кредита */
  openDate: string;
  /** Дата закрытия кредита (если применимо) */
  closeDate: string | null;
  /** Ежемесячный платеж */
  monthlyPayment: number;
  /** Сумма просроченных процентов */
  interestOverdueAmount: number;
  /** Первоначальная сумма кредита */
  initialAmount: number;
  /** Срок кредита в месяцах */
  term: number;
  /** Валюта кредита */
  currency: string;
};

/**
 * Представляет информацию об инвестициях
 */
export type Investment = {
  /** Дата расчета */
  calculateDate: string;
  /** Код партнера */
  partnerCode: string;
  /** Детальная информация о партнере */
  partnerDetail: string;
  /** Текущий баланс инвестиций */
  currentBalance: number;
  /** Баланс СМО (система мониторинга операций) */
  smoBalance: number;
  /** Предыдущий баланс СМО */
  smoLastBalance: number;
  /** Валюта инвестиций */
  currency: string;
  /** Список инвестиционных контрактов */
  contracts: InvestmentContract[];
};

/**
 * Представляет информацию об инвестиционном контракте
 */
export type InvestmentContract = {
  /** Код партнера */
  partnerCode: string;
  /** Номер контракта */
  contractNumber: string;
  /** Название инвестиционной стратегии */
  strategyName: string;
  /** Название офиса */
  officeName: string;
  /** Полное имя сотрудника */
  employeeFullName: string;
  /** Код статуса контракта */
  contractStatusCode: string;
  /** Детальное описание статуса контракта */
  contractStatusDetail: string;
  /** Текущая сумма инвестиций */
  currentAmount: number;
  /** Начальная сумма инвестиций */
  openAmount: number;
  /** Комиссия */
  commission: number;
  /** Дата баланса */
  balanceDate: string;
  /** Дата открытия контракта */
  openDate: string | null;
  /** Планируемая дата закрытия */
  planCloseDate: string;
  /** Фактическая дата закрытия */
  factCloseDate: string;
  /** Срок контракта */
  term: string;
};

/**
 * Представляет общие балансы по различным категориям
 */
export type Balances = {
  /** Суммы по дебетовым счетам */
  debetAmount: CurrencyAmount[];
  /** Суммы по кредитным счетам */
  creditAmount: CurrencyAmount[];
  /** Общие суммы по счетам */
  accountAmount: CurrencyAmount[];
  /** Суммы по дебетовым картам */
  debetCardAmount: CurrencyAmount[];
  /** Суммы по кредитным картам */
  creditCardAmount: CurrencyAmount[];
  /** Суммы по кредитам */
  loanAmount: CurrencyAmount[];
  /** Суммы по инвестициям */
  investmentAmount: CurrencyAmount[];
};

/**
 * Представляет сумму в определенной валюте
 */
export type CurrencyAmount = {
  /** Сумма */
  amount: number;
  /** Код валюты */
  currency: string;
};
