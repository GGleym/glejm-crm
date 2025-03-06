import {type FC} from 'react';
import {useUnit} from 'effector-react';

import {isNullable} from '@mtsdengi/uikit-fintech';
import {jwtStores} from '~/services/jwt-token-service';

type TWithAuthorizedProps = {
  Authorized: FC;
  UnAuthorized: FC;
};

type TWithAuthorizedCompProps = Record<string, string>;

export const withAuthorized =
  ({Authorized, UnAuthorized}: TWithAuthorizedProps) =>
  (props: Partial<TWithAuthorizedCompProps>) => {
    const refreshToken = useUnit(jwtStores.$cookieRefreshToken);

    return isNullable(refreshToken) ? <UnAuthorized /> : <Authorized {...props} />;
  };
