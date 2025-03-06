import {useForm} from 'effector-forms';
import {useUnit} from 'effector-react';

import {InputHelperText} from '@mtsbank/ui-kit';
import {Button, Input, Loader, Spacer, Text} from '@mtsdengi/uikit-fintech';

import {Logo} from './ui';

import {Password} from './ui/password';
import {$authForm, events, stores} from './model';
import {Styled} from './styled';

export const Form = () => {
  const {fields} = useForm($authForm);
  const onAuthorized = useUnit(events.onAuthorizedEvent);
  const [isAuthorizing, hasAuthError] = useUnit([stores.$isAuthorizing, stores.$hasAuthError]);

  return (
    <Styled.Wrapper>
      <Logo />
      <Spacer space="s20" />
      <Text font="h4Wide">Личный кабинет сотрудника</Text>
      <Spacer space="s24" />
      <Input
        isClearable={false}
        placeholder="Логин"
        value={fields.username.value}
        onChange={({target: {value}}) => fields.username.onChange(value)}
        hasError={hasAuthError}
      />
      {hasAuthError && <InputHelperText hasError>Неправильный логин или пароль</InputHelperText>}

      <Spacer space="s16" />

      <Password
        value={fields.password.value}
        onChange={({target: {value}}) => fields.password.onChange(value)}
        hasError={hasAuthError}
      />

      <Spacer space="s24" />

      <Button
        fluid
        waiting={isAuthorizing ? Loader : null}
        disabled={!(fields.password.value && fields.username.value)}
        size={52}
        onClick={onAuthorized}
      >
        Войти
      </Button>
    </Styled.Wrapper>
  );
};
