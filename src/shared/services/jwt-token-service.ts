import {createFactory, invoke} from '@withease/factories';
import {createEffect, createEvent, createStore, sample} from 'effector';
import {spread} from 'patronum';
import {jwtDecode} from 'jwt-decode';

import {getCookie, setCookie} from '~/utils/cookie';

const REFRESH_TOKEN = 'refresh_token';
const REFRESH_TOKEN_EXP_IN = 'refresh_token_exp_in';

/**
 * Данные пользователя.
 *
 * @prop exp - Время жизни.
 * @prop name - ФИО.
 * @prop sub - Уникальный токен пользователя keycloak.
 * @prop azp - Домен пользователя.
 * @prop family_name - Фамилия.
 * @prop given_name - Имя.
 * @prop email - Электронная почта.
 * @prop preferred_username - Логин.
 */
export type DecodeToken = {
  exp: number;
  name: string;
  sub: string;
  azp: string;
  family_name: string;
  given_name: string;
  email: string;
  preferred_username: string;
};

type TokenDto = {
  accessToken: string;
  refreshToken: string;
};

const createJwtServiceFactory = createFactory(() => {
  const getTokenEvent = createEvent();
  const setTokensEvent = createEvent<TokenDto>();

  const $accessToken = createStore<string | null>(null);
  const $cookieRefreshToken = createStore<string | undefined | null>(null);

  const setTokensFx = createEffect<
    ({expiresIn, refreshToken}: Pick<TokenDto, 'refreshToken'> & {expiresIn: number}) => string
  >(({refreshToken, expiresIn}) => {
    setCookie(REFRESH_TOKEN, refreshToken);
    setCookie(REFRESH_TOKEN_EXP_IN, expiresIn.toString());

    return refreshToken;
  });
  const getRefreshTokenFx = createEffect(() => getCookie(REFRESH_TOKEN));

  // Получение токена из куки
  sample({
    clock: [getRefreshTokenFx.doneData, setTokensFx.doneData],
    target: $cookieRefreshToken,
  });

  sample({
    clock: setTokensEvent,
    fn: ({accessToken, refreshToken}) => {
      // const decodedAccessToken = jwtDecode<DecodeToken>(accessToken);
      const decodedRefreshToken = jwtDecode<DecodeToken>(refreshToken ?? '');

      return {
        accessToken,
        setTokenCookiesData: {
          refreshToken,
          expiresIn: decodedRefreshToken.exp,
        },
      };
    },
    target: spread({
      accessToken: $accessToken,
      setTokenCookiesData: setTokensFx,
    }),
  });

  return {
    events: {
      getTokenEvent,
      setTokensEvent,
    },

    stores: {
      $accessToken,
      $cookieRefreshToken,
    },

    effects: {
      getRefreshTokenFx,
    },
  };
});

export const {stores: jwtStores, events: jwtEvents, effects: jwtEffects} = invoke(createJwtServiceFactory);
// TODO: избавиться в пользу барьеров
export const authHeaders = jwtStores.$accessToken.map((token) => ({Authorization: `Bearer ${token}`}));
