export enum ESearchType {
  /** Физ лицо */
  person = 'person',
  /** Юр лицо */
  corp = 'corp',
}

/** Подсказки юр лица */
export type PartySuggest = {
  /** Наименование организации */
  value: string;
  data: {
    /** ИНН организации */
    inn: string;
  };
};
