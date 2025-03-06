import {useRef, useCallback} from 'react';
import debounce from 'lodash/debounce';

export const useDebouncedCallback = <T>(callback: T, delay: number, opt = {}) => {
  const callbackRef = useRef(null);
  callbackRef.current = callback;

  return useCallback(
    debounce((...args) => callbackRef.current(...args), delay, opt),
    [],
  );
};
