import {granatLightTheme, Text} from '@mtsdengi/uikit-fintech';

import {Styled} from './styled';

type InfoItemProps = {
  /** Название */
  label: string;
  /** Значение */
  value: string;
};

export const InfoItem = ({label, value}: InfoItemProps) => (
  <Styled.Container>
    <Text color={granatLightTheme.colors.text.secondary}>{label}</Text>
    <Text font="p4RegularText">{value}</Text>
  </Styled.Container>
);
