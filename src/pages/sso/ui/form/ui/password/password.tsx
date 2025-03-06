import {useState} from 'react';

import {InputHelperText} from '@mtsbank/ui-kit';
import {Icon, Input, InputProps} from '@mtsdengi/uikit-fintech';

export const Password = ({value, hasError, onChange}: InputProps) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <Input
        isClearable={false}
        placeholder="Пароль"
        type={isHidden ? 'input' : 'password'}
        iconEnd={
          <div onClick={() => setIsHidden((isHidden) => !isHidden)}>
            {isHidden ? (
              <Icon iconPath="granat/show/size-24-style-outline" />
            ) : (
              <Icon iconPath="granat/hide/size-24-style-outline" />
            )}
          </div>
        }
        value={value}
        onChange={onChange}
        hasError={hasError}
      />
      {hasError && <InputHelperText hasError>Неправильный логин или пароль</InputHelperText>}
    </>
  );
};
