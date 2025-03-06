import {CheckboxRow} from '@mtsdengi/uikit-fintech';

import {Styled} from './styled';

type MarkerBarProps = {
  /** Список чекбоксов */
  items: {id: string; label: string; checked: boolean}[];
};

export const MarkerBar = ({items}: MarkerBarProps) => (
  <Styled.Container>
    {items.map(({id, label, checked}) => (
      <CheckboxRow key={id} component={{checkbox: {checked}}} label={label} />
    ))}
  </Styled.Container>
);
