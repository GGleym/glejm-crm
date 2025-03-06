import {useState, useEffect, DependencyList} from 'react';

import {useDidMount} from './useDidMount';

export const useDidUpdate = (callback: () => void, conditions: DependencyList) => {
  const [hasMounted, setHasMounted] = useState(false);
  if (typeof conditions !== 'undefined' && !Array.isArray(conditions)) {
    conditions = [conditions];
  } else if (Array.isArray(conditions) && conditions.length === 0) {
    console.warn(
      'Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.',
    );
  }
  useDidMount(() => {
    setHasMounted(true);
  });
  useEffect(() => {
    if (hasMounted) {
      callback();
    }
  }, conditions);
};
