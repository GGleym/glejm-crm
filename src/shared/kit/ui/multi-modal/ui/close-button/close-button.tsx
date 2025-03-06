import {Icon} from '@mtsdengi/uikit-fintech';

import {Styled} from './styled';

export type CloseButtonProps = {
  onClose: () => void;
};

export const CloseButton = ({onClose}: CloseButtonProps) => (
  <Styled.Button onClick={onClose}>
    <Icon iconPath="granat/cross/size-16-style-outline" />
  </Styled.Button>
);
