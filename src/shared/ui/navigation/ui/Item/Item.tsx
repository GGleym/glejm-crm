import {Text} from '@mtsdengi/uikit-fintech';

import {Styled} from './styled';

export type ItemProps = {
  /** ID */
  id: string;
  /** Label */
  label: string;
  /** Признак выбора */
  selected: boolean;
  /** Хендлер выбора */
  onSelect: (value: string) => void;
  /** Бейдж */
  badge?: number | string;
};

export const Item = ({id, label, selected, onSelect, badge}: ItemProps) => (
  <Styled.Wrapper $selected={selected} onClick={() => onSelect(id)}>
    <Text color={selected ? 'white' : 'black'} font="p4MediumComp">
      {label}
    </Text>
    {badge && <Styled.Badge>{badge}</Styled.Badge>}
  </Styled.Wrapper>
);
