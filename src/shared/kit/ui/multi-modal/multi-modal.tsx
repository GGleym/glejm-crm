import {useState, useLayoutEffect, useCallback, useRef} from 'react';
import {useUnit} from 'effector-react';

import {Icon} from '@mtsdengi/uikit-fintech';

import {Tab} from './ui/tab';
import {AdditionalButton} from './ui/additional-button';
import {calculateVisibleTabs} from './lib/utils/calculate-visible-tabs';
import {type SnapshotView} from './lib/types';

import {FlatButton} from '../flat-button';

import {multiModalEvents, multiModalStores} from './model';
import {Styled} from './styled';

export const MultiModal = () => {
  const tabBarRef = useRef<HTMLDivElement>(null);

  const [modals, currentModalId] = useUnit([multiModalStores.$modals, multiModalStores.$currentModalId]);

  const [visibleTabs, setVisibleTabs] = useState<SnapshotView[]>(modals);

  const updateVisibleTabs = useCallback(() => {
    const width = tabBarRef?.current?.clientWidth || 0;
    const calculatedTabs = calculateVisibleTabs(modals, width, Boolean(currentModalId));

    setVisibleTabs(calculatedTabs);
  }, [modals, currentModalId]);

  useLayoutEffect(() => {
    updateVisibleTabs();
    window.addEventListener('resize', updateVisibleTabs);

    return () => window.removeEventListener('resize', updateVisibleTabs);
  }, [updateVisibleTabs]);

  const hiddenTabsCount = modals.length - visibleTabs.length;
  const hasHiddenTabs = hiddenTabsCount > 0;

  return (
    <Styled.Container>
      <FlatButton icon={<Icon iconPath="granat/home/size-24-style-outline" color={'#007CFF'} />} enabled={false} />
      <Styled.TabBar ref={tabBarRef}>
        <Styled.Container>
          <Styled.TabWrapper>
            {modals.map((tab, index) => (
              <Tab
                key={tab.id}
                {...tab}
                isSearchTab={index === visibleTabs.length - 1}
                isActive={tab.id === currentModalId}
                onClose={multiModalEvents.onModalRemovedEvent}
                onSelect={multiModalEvents.onModalActivatedEvent}
              />
            ))}
            {hasHiddenTabs && <AdditionalButton count={hiddenTabsCount}></AdditionalButton>}
          </Styled.TabWrapper>
        </Styled.Container>
      </Styled.TabBar>
    </Styled.Container>
  );
};
