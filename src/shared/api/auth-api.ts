export class AuthApi {
  constructor(
    private url: string = '',
    private realm: string = '',
    private clientId: string = '',
  ) {}

  public login(username: string, password: string) {
    const credentials = new URLSearchParams({
      grant_type: 'password',
      scope: 'openid',
      client_id: this.clientId,
      username,
      password,
    });

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: credentials.toString(),
    };

    return fetch(
      `https://mlc.ump-test.mbrd.ru:8091/${this.url}/realms/${this.realm}/protocol/openid-connect/token`,
      options,
    );
  }

  public logout(_: string, refreshToken: string) {
    const credentials = new URLSearchParams({
      scope: 'openid',
      client_id: this.clientId,
      refresh_token: refreshToken,
    });

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: credentials.toString(),
    };

    return fetch(`${this.url}/realms/${this.realm}/protocol/openid-connect/logout`, options);
  }

  public refreshToken(token: string) {
    const credentials = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: this.clientId,
      refresh_token: token,
    });

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: credentials.toString(),
    };

    return fetch(`${this.url}/realms/${this.realm}/protocol/openid-connect/token`, options).then((response) =>
      response.json(),
    );
  }
}
