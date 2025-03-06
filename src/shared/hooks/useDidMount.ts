import {useEffect} from 'react';

export const useDidMount = (f: CallableFunction) => useEffect(() => f && f(), []);
