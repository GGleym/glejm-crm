import {Dispatch, RefObject, SetStateAction} from 'react';

export const checkOverflow = (
  textRef: RefObject<HTMLDivElement | null>,
  containerRef: RefObject<HTMLDivElement | null>,
  setter: Dispatch<SetStateAction<boolean>>,
) => {
  const textWidth = textRef.current?.scrollWidth || 0;
  const containerWidth = containerRef.current?.clientWidth || 0;

  setter(textWidth > containerWidth);
};
