export type PersonalInfoCardProps = {
  /** Дата рождения */
  dateOfBirth: string;
  /** Возраст */
  age: string;
  /** Пол */
  gender: string;
  /** Гражданство */
  citizenship: string;
  /** Место рождения */
  placeOfBirth: string;
  /** Количество лет в банке */
  bankYears: string;
  /** Код привязки */
  postCode: string;
  /** Семейное положение */
  maritalStatus: string;
  /** Образование */
  education: string;
  /** RBO ID */
  rboId: string;
  /** Siebel ID */
  siebelId: string;
  /** Domain ID */
  domainId: string;
  /** MDM ID */
  mdmId: string;
};

export type DocumentsProps = {
  /** Тип документа */
  documentType: string | string[];
  /** Серия документа */
  series: string;
  /** Номер документа */
  number: string;
  /** Дата выдачи */
  issueDate: string;
  /** Код подразделения */
  issueCode: string;
  /** Кем выдан */
  issueOrgName: string;
};

export type ContactsProps = {
  /** Номер телефона */
  phoneNumber: string;
  /** E-mail */
  email: string;
  /** Адрес регистрации */
  registrationAddress: string;
  /** Адрес проживания */
  residentialAddress: string;
};

export type OccupationProps = {
  /** Основной вид занятости */
  employmentType: string;
  /** Должность */
  position: string;
  /** Уровень должности */
  positionLevel: string;
  /** Дата приёма на работу */
  hireDate: string;
  /** Сфера занятий клиента */
  clientActivitySphere: string;
  /** Сфера занятий клиента (другое) */
  clientActivitySphereOther: string;
  /** Общий трудовой стаж */
  totalExperience: string;
  /** Стаж работы в текущей сфере деятельности */
  currentFieldExperience: string;
  /** Краткое наименование */
  shortName: string;
  /** Наименование организации */
  organizationName: string;
  /** ИНН */
  inn: string;
  /** Сфера деятельности организации */
  organizationActivity: string;
  /** E-mail организации */
  organizationEmail: string;
  /** Размер компании (количество человек) */
  companySize: string;
  /** Вид собственности */
  ownershipType: string;
  /** Отделение привязки */
  branchAffiliation: string;
  /** Принадлежность компании */
  companyAffiliation: string;
  /** Организационно-правовая форма */
  legalForm: string;
  /** Юридический адрес */
  legalAddress: string;
  /** Фактический адрес */
  actualAddress: string;
};

export type FinConditionProps = {
  /** Ежемесячный доход */
  monthIncome: string;
  /** Расходы */
  expenses: string;
};
