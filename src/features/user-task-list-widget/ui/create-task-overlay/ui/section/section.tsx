import {type ReactNode} from 'react';

import {granatLightTheme, Text} from '@mtsdengi/uikit-fintech';
import {Spacer} from '@mtsbank/ui-kit';

type SectionProps = {
  /** Заголовок секции */
  title: string;
  /** Список полей */
  fields: ReactNode[];
};

export const Section = ({title, fields}: SectionProps) => (
  <>
    <Text font="h3Comp">{title}</Text>
    <Spacer space={granatLightTheme.spacings.s12} />
    {fields.map((field, index) => (
      <>
        {field}
        {index < fields.length - 1 && <Spacer space={granatLightTheme.spacings.s12} />}
      </>
    ))}
  </>
);
