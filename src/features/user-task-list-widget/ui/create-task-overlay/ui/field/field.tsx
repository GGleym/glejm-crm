import {InlineEdit, InlineEditProps, Text, granatLightTheme} from '@mtsdengi/uikit-fintech';

import {Styled} from './styled';

type FieldProps = InlineEditProps & {
  /** Label поля */
  label?: string;
};

export const Field = ({label, value, onChange, placeholder}: FieldProps) => (
  <Styled.Wrapper>
    {label && <Text color={granatLightTheme.colors.text.secondary}>{label}</Text>}
    <InlineEdit withIcon={false} placeholder={placeholder} onChange={onChange} value={value} />
  </Styled.Wrapper>
);
