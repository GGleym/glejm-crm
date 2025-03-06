import {useEffect} from 'react';

export const useScrollBlocked = (cond: boolean) => {
  useEffect(() => {
    if (cond) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [cond]);
};
