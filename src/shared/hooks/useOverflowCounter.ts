import {useState, useEffect, type RefObject} from 'react';

import {useDebouncedCallback} from './useDebouncedCallback';

/**
 * Хук для управления переполнением контейнера элементами
 * @param outerDiv - реф внешнего контейнера
 * @param innerDiv - реф внутреннего контейнера
 * @param deps - дополнительные зависимости, запускающие вычисления
 * @param reverse - считать размеры дочерних узлов с конца
 * @return число не поместившихся в контейнер элементов и суммарный размер поместившихся
 */
export const useOverflowCounter = (
  outerDiv: RefObject<HTMLDivElement>,
  innerDiv: RefObject<HTMLDivElement>,
  deps: unknown[] = [],
  reverse = false,
) => {
  const [hideByWidthCount, setHideByWidthCount] = useState(0);
  const [hideByHeightCount, setHideByHeightCount] = useState(0);

  const [occupiedWidth, setOccupiedWidth] = useState(0);
  const [occupiedHeight, setOccupiedHeight] = useState(0);

  const [capacityWidth, setCapacityWidth] = useState(0);
  const [capacityHeight, setCapacityHeight] = useState(0);

  const calcCapacity = useDebouncedCallback(() => {
    if (outerDiv.current) {
      setCapacityWidth(outerDiv.current.clientWidth);
      setCapacityHeight(outerDiv.current.clientHeight);
    }
  }, 100);

  useEffect(() => {
    if (!outerDiv.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(calcCapacity);
    resizeObserver.observe(outerDiv.current);
    calcCapacity();
  }, [outerDiv]);

  useEffect(() => {
    if (!outerDiv.current || !innerDiv.current) {
      return;
    }

    const elements = innerDiv.current.childNodes;

    let start = 0;
    let end = elements.length - 1;
    let step = 1;
    if (reverse) {
      [start, end] = [end, start];
      step = -1;
    }
    const shouldContinue = (index: number) => (reverse ? index >= end : index <= end);

    const calcTools = {
      offsetWidth: {
        capacity: capacityWidth,
        setCount: setHideByWidthCount,
        setOccupiedSpace: setOccupiedWidth,
      },
      offsetHeight: {
        capacity: capacityHeight,
        setCount: setHideByHeightCount,
        setOccupiedSpace: setOccupiedHeight,
      },
    };

    const calcOccupiedSpace = (offsetType: 'offsetWidth' | 'offsetHeight') => {
      let occupied = 0;
      const capacity = calcTools[offsetType].capacity;
      for (let i = start; shouldContinue(i); i += step) {
        const item = elements[i];
        if (item instanceof HTMLElement) {
          const itemOffset = item[offsetType];
          occupied += itemOffset;
          if (capacity < occupied) {
            calcTools[offsetType].setCount(Math.abs(end - i + step));
            calcTools[offsetType].setOccupiedSpace(occupied - itemOffset);
            return;
          }
        } else {
          console.error('Недопустимый узел в контейнере элементов:', item);
          throw new Error();
        }
      }
      calcTools[offsetType].setCount(0);
      calcTools[offsetType].setOccupiedSpace(0);
    };

    try {
      calcOccupiedSpace('offsetWidth');
      calcOccupiedSpace('offsetHeight');
    } catch {
      setHideByWidthCount(0);
      setHideByHeightCount(0);
      setOccupiedWidth(0);
      setOccupiedHeight(0);
    }
  }, [outerDiv, innerDiv, capacityWidth, capacityHeight, reverse, ...deps]);

  return {hideByWidthCount, hideByHeightCount, occupiedWidth, occupiedHeight};
};
