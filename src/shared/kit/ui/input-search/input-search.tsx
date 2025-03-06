import {forwardRef, useRef, useState, useEffect} from 'react';
import {useTheme} from 'styled-components';

import {type DroplistProps, InputProps, Input, Icon, Droplist} from '@mtsdengi/uikit-fintech';

type InputSearchSize = 32 | 44 | 52;

export interface InputSearchProps extends Omit<DroplistProps, 'anchorRef' | 'centered'> {
  /** Размер компонента */
  size?: InputSearchSize;
  /** Пропсы InputProps */
  inputProps?: Omit<InputProps, 'size' | 'inputTypeIcon' | 'inputWrapperRef' | 'isSelect' | 'iconStart'>;
}

export const InputSearch = forwardRef<HTMLDivElement, InputSearchProps>((props, ref) => {
  const {inputProps, size = 44, children, open = false, ...rest} = props;
  const anchorRef = useRef(null);
  const [opened, setOpened] = useState(open);
  const theme = useTheme();

  useEffect(() => {
    setOpened(open);
  }, [open]);

  return (
    <div ref={ref}>
      <Input
        {...inputProps}
        size={size}
        iconStart={<Icon iconPath="granat/search/size-24-style-outline" color={theme.colors.icons.secondary} />}
        inputWrapperRef={anchorRef}
      />
      <Droplist {...rest} open={opened} anchorRef={anchorRef}>
        {children}
      </Droplist>
    </div>
  );
});
