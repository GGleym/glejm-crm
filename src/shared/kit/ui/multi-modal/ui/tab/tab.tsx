import {Fragment, useLayoutEffect, useMemo, useRef, useState} from 'react';

import {debounce} from 'lodash';

import {Spinner, Text} from '@mtsdengi/uikit-fintech';

import {Marquee} from '../marquee';

import {TAB_ICONS} from '../../lib/constants';
import {type SnapshotView} from '../../lib/types';

import {checkOverflow} from './model';
import {Styled} from './styled';

export type TabProps = SnapshotView & {
  /** Признак активного таба */
  isActive: boolean;
  /** Признак таба поиска */
  isSearchTab: boolean;
  /** Закрыть таб */
  onClose: (id: string) => void;
  /** Хендлер выбора таба */
  onSelect: (id: string) => void;
};

export const Tab = ({
  title,
  onClose,
  isActive,
  isSearchTab,
  onSelect,
  icon: HostIcon,
  id,
  hasNotification = false,
  iconType = 'task',
  iconCondition = 'default',
}: TabProps) => {
  const [hasMarquee, setHasMarquee] = useState(false);

  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const icon = HostIcon ?? TAB_ICONS[iconType];

  const calculatedIcon = useMemo(() => {
    switch (iconCondition) {
      case 'notification': {
        return <Styled.IconWrapper showDot>{icon}</Styled.IconWrapper>;
      }
      case 'loading': {
        return (
          <Styled.IconWrapper showDot={hasNotification}>
            <Spinner size={16} />
          </Styled.IconWrapper>
        );
      }
      default: {
        return <Styled.Icon $hasText={!!title}>{icon}</Styled.Icon>;
      }
    }
  }, [iconCondition, hasNotification, icon, title]);

  const TitleContainer = hasMarquee ? Marquee : Fragment;

  useLayoutEffect(() => {
    const checkOverflowBinded = () => checkOverflow(textRef, containerRef, setHasMarquee);

    const handleResize = debounce(checkOverflowBinded, 200);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [title]);

  return (
    <Styled.DividedContainer isSearchTab={isSearchTab} isActive={isActive} onClick={() => onSelect(id)}>
      <Styled.Wrapper isSearchTab={isSearchTab} isActive={isActive}>
        {calculatedIcon}
        <Styled.Description>
          <div ref={containerRef}>
            <TitleContainer>
              <Text ref={textRef}>{title}</Text>
            </TitleContainer>
          </div>
        </Styled.Description>
        {isActive && !isSearchTab && <Styled.Close onClose={() => onClose(id)} />}
      </Styled.Wrapper>
    </Styled.DividedContainer>
  );
};
