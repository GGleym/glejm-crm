import {type ComponentProps} from 'react';

import {CellText} from '@mtsdengi/uikit-fintech';

import {Overlay} from '~/kit/ui/overlay';

import {Styled} from './styled';

type ProductOverlayProps = ComponentProps<typeof Overlay> & {};

export const ProductOverlay = ({isOpen, onClose}: ProductOverlayProps) => (
  <Overlay isOpen={isOpen} onClose={onClose}>
    <Styled.Wrapper>
      <CellText reverse label="s_p_mir_supreme RUR" caption="Дебетовая карта" />
    </Styled.Wrapper>
  </Overlay>
);
