import {Badge, Button, granatLightTheme, Icon, Text} from '@mtsdengi/uikit-fintech';
import {theme, Spacer} from '@mtsbank/ui-kit';

import {MarkerBar} from '../MarkerBar';
import {ClientInfoBar} from '../ClientInfoBar';

import {Styled} from './styled';

type CommonInformationProps = {
  /** Тип документа */
  documentType: string;
  /** Номер документа */
  documentNumber: string;
  /** Категория */
  category: string;
  /** Сегмент */
  segment: string;
  /** Комментарий */
  comment: string;
  /** Менеджер */
  managerName: string;
};

export const CommonInformation = ({
  documentType,
  documentNumber,
  category,
  segment,
  comment,
  managerName,
}: CommonInformationProps) => (
  <Styled.Container>
    <Badge textColor="white" backgroundColor={granatLightTheme.colors.accent.active}>
      Признак любви к котикам
    </Badge>
    <Spacer space={theme.spacings.xs} />
    <ClientInfoBar
      items={[
        {label: 'Менеджер', value: managerName},
        {label: 'Тип документа', value: documentType},
        {label: 'Номер документа', value: documentNumber},
        {label: 'Категория', value: category},
        {label: 'Сегмент', value: segment},
      ]}
    />
    <Spacer space={theme.spacings.md} />
    <MarkerBar items={[{id: '1', label: 'Сотрудника банка', checked: true}]} />
    <Spacer space={theme.spacings.md} />
    <Text font="p4MediumComp">Комментарий:</Text>
    <Spacer space={theme.spacings.xs4} />
    <Text font="p4RegularText">{comment}</Text>
    <Spacer space={theme.spacings.xs} />
    <Button size={32} variant="ghost" icon={<Icon iconPath="granat/backup-veeam/size-16-style-outline" />}>
      История взаимодействий
    </Button>
  </Styled.Container>
);
