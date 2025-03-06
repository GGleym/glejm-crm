export type PersonalDataFilterRequest = {
  /** Номер телефона */
  phone?: string;
  /** Email */
  email?: string;
  /** Тип личного документа. По умолчанию PASSPORT */
  identityDocType?: 'PASSPORT';
  /** Серия документа, удостоверяющего личность */
  identityDocSeries?: string;
  /** Номер документа, удостоверяющего личность */
  identityDocNumber?: string;
  /** Имя */
  firstName?: string;
  /** Отчество */
  secondName?: string;
  /** Фамилия */
  lastName?: string;
  /** Дата рождения */
  dateOfBirth?: string;
  /** Адрес регистрации */
  fullAddressReg?: string;
  /** Адрес фактического проживания */
  fullAddressFact?: string;
  /** Источник полученных данных из client360 */
  serviceName?: string;
  /** Минимальный коэффициент соответствия */
  minMatchScope?: string;
};

export type IdentifierFilterRequest = {
  /** Код системы банка */
  systemCode?: string;
  /** Идентификатор клиента в системе банка */
  id?: string;
  /** Номер телефона */
  phone?: string;
};

export type PersonalDataFilter = {
  /** ФИО */
  fullName: string;
  /** ФИО из dadata */
  fullNameSuggestion: string;
  /** Серия и номер паспорта */
  identityDoc: string;
  /** Дата рождения */
  dateOfBirth: Date | null;
  /** Номер телефона */
  phone: string;
  /** Тип адреса (фактический или регистрации) */
  addressType: string;
  /** Адрес */
  address: string;
  /** Источник полученных данных из client360 */
  serviceName: string;
  /** Адрес из dadata */
  addressSuggestion: string;
};

export type IdentityDocument = {
  /** Тип документа */
  type: 'PASSPORT';
  /** Серия */
  series: string;
  /** Номер */
  number: string;
  /** Дата выдачи */
  issueDate?: string;
  /** Код подразделения */
  departCode?: string;
  /** Кем выдан */
  issuedBy?: string;
  /** Серия прежнего паспорта */
  seriesPrev?: string;
  /** Номер прежнего паспорта */
  numberPrev?: string;
};

export type Citizenship = {
  /** Код страны */
  countryCode: string;
  /** Наименование страны */
  countryName: string;
  /** Наличие гражданства США */
  citizenUsa?: boolean;
};

export type Category = {
  /** Код категории */
  code?: string;
  /** Наименование категории */
  name?: string;
};

export type BankClient = {
  /** ИС банка */
  systemCode?: 'RBO' | 'DOMAIN' | 'SIEBEL' | 'MDM';
  /** Идентификатор клиента в ИС банка */
  clientId?: string;
};

export type Address = {
  /** Полный адрес */
  fullAddress?: string;
  /** Страна */
  countryName?: string;
  /** Код страны */
  countryCode?: string;
  /** Регион */
  regionName?: string;
  /** Тип региона */
  regionType?: string;
  /** Код региона */
  regionCode?: string;
  /** Тип района */
  districtType?: string;
  /** Наименование района */
  districtName?: string;
  /** Город */
  cityName?: string;
  /** Тип города */
  cityType?: string;
  /** Населённый пункт */
  localityName?: string;
  /** Тип населённого пункта */
  localityType?: string;
  /** Улица */
  streetName?: string;
  /** Тип улицы */
  streetType?: string;
  /** Дом */
  house?: string;
  /** Квартира */
  flat?: string;
  /** Строение */
  building?: string;
  /** Корпус */
  block?: string;
  /** Почтовый индекс */
  zipCode?: string;
  /** Код ФИАС */
  fiasCode?: string;
  /** Уровень ФИАС */
  fiasLevel?: string;
  /** Код КЛАДР */
  kladrCode?: string;
  /** Код полноты адреса */
  checkCode?: string;
  /** Статус проверки адреса */
  complCode?: string;
  /** Код ОКАТО */
  okato?: string;
  /** Код ОКТМО */
  oktmo?: string;
  /** Часовой пояс */
  timeZone?: string;
  /** Внутригородская территория */
  intracityName?: string;
  /** Тип внутригородской территории */
  intracityType?: string;
  /** Планировочная структура */
  planningStructureName?: string;
  /** Тип планировочной структуры */
  planningStructureNameType?: string;
};

export type BaseAddress = {
  /** Тип адреса */
  type: 'FACT' | 'DELIVERY' | 'WORK' | 'REG' | 'LEGAL';
  /** Адрес */
  address: Address;
  /** Основание для регистрации */
  regBasis?: string;
  /** Дата регистрации */
  regDate?: string;
};

export type Contact = {
  /** Тип контакта */
  type: 'PHONE' | 'EMAIL' | 'MOBILE' | 'HOMEPHONE' | 'WORKPHONE' | 'REGPHONE' | 'TEMPREGPHONE' | 'MANAGEPHONE';
  /** Значение контакта */
  value: string;
  /** Комментарий */
  comment?: string;
  /** Дополнительный контакт самого участника (Person) */
  personAdditionalContact?: boolean;
  /** Кому принадлежит контакт */
  relation?: string;
  /** Фамилия дополнительного контакта */
  lastName?: string;
  /** Имя дополнительного контакта */
  firstName?: string;
  /** Отчество дополнительного контакта */
  secondName?: string;
  /** Пол дополнительного контакта */
  gender?: string;
  /** Дата рождения дополнительного контакта */
  birthDate?: string;
};
