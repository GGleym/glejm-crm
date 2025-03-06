import {createEffect, createEvent, sample} from 'effector';
import {createFactory, invoke} from '@withease/factories';

import {loginQuery, refreshTokenQuery} from '~/api/auth-query';
import {jwtEffects, jwtEvents} from '~/services/jwt-token-service';

import {createAuthFormFactory} from './auth-form-factory';
import {ssoGate} from '~/pages/sso/model';
import {isNotNullable} from '@mtsdengi/uikit-fintech';

export const createAuthFactory = createFactory(() => {
  const {$authForm} = invoke(createAuthFormFactory);

  const onAuthorizedEvent = createEvent();

  const $hasAuthError = loginQuery.$data.map((loginData) => !!loginData?.error);

  const onTokensSavedFx = createEffect((resData: {access_token: string; refresh_token: string}) => {
    jwtEvents.setTokensEvent({accessToken: resData.access_token, refreshToken: resData.refresh_token});
  });

  // При заходе на страницу проверить наличие refreshToken в cookie
  sample({
    clock: ssoGate.open,
    target: jwtEffects.getRefreshTokenFx,
  });

  // При наличии refreshToken в cookie обновить токен, вызвав соответствующий запрос
  sample({
    clock: jwtEffects.getRefreshTokenFx.doneData,
    filter: isNotNullable,
    fn: (token) => ({token}),
    target: refreshTokenQuery.start,
  });

  // При клике на кнопку "Войти" отправить запрос авторизации
  sample({
    clock: onAuthorizedEvent,
    source: $authForm.$values,
    target: loginQuery.start,
  });

  // При успешном выполнении запроса авторизации сохранить полученные токены
  sample({
    clock: [loginQuery.finished.success, refreshTokenQuery.finished.success],
    fn: ({result}) => result,
    target: onTokensSavedFx,
  });

  // При изменении значения поля сбросить ошибки
  sample({
    clock: [$authForm.fields.password.changed, $authForm.fields.username.changed],
    source: $hasAuthError,
    filter: Boolean,
    target: loginQuery.reset,
  });

  return {
    $authForm,

    events: {
      onAuthorizedEvent,
    },

    stores: {
      $hasAuthError,
      $isRefreshing: refreshTokenQuery.$pending,
      $isAuthorizing: loginQuery.$pending,
    },
  };
});
