export const setCookie = (name: string, value: string, {path, ...otherOptions} = {}) => {
  const options: typeof otherOptions = {
    ...otherOptions,
    path: path ?? '/',
  };

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
};
