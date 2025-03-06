import {useEffect} from 'react';

export const useTimer = (cb: () => void, time: number = 1000) => {
  useEffect(() => {
    const timer = setInterval(cb, time);

    return () => clearInterval(timer);
  });
};
