import {createEffect} from 'effector';

export const getRedirectFx = (url: string) =>
  createEffect(() => {
    window.location.href = url;
  });
