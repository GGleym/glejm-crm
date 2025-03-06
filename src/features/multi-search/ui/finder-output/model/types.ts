export type TPassportSearchQueryRes = {
  type: string;
  name: string;
  firstName: string;
  lastName: string;
  secondName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  isFullyIdent: boolean;
  identificationLevel: string;
  identityDocumentType: string;
  identityDocumentSeries: string;
  identityDocumentNumber: string;
  rboCategory: string;
  rboCategoryName: string;
  available: boolean;
  comment: string;
  serviceName: string;
  bankClients: [
    {
      systemCode: string;
      clientId: string;
    },
  ];
  processId: string;
};
