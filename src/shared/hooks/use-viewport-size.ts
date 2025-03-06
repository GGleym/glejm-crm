import {useCallback, useLayoutEffect, useState} from 'react';

const getWinSize = () => [window.innerWidth, window.innerHeight] as const;

export const useViewportSize = () => {
    const [size, setSize] = useState(getWinSize());

    const updateSize = useCallback(() => {
        setSize(getWinSize());
    }, []);

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, [updateSize]);

    return size;
};
