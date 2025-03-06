import {useUnit} from 'effector-react';
import {reflect} from '@effector/reflect';

import {Tabs, Tab, Spacer, Input, InputLoader} from '@mtsdengi/uikit-fintech';

import {events, stores} from '../../model';

import {ESearchType} from '../../lib/types';
import {Styled} from './styled';

const SearchStrategyTabs = reflect({
  view: Tabs,
  bind: {
    activeTab: stores.$searchType,
    onActiveTabChange: events.onChangeSearchType.prepend((id) => id as ESearchType),
  },
});

export const SearchStrategy = () => {
  const onEnterPressed = useUnit(events.onEnterPressedEvent);
  const [searchType, searchValue, pending] = useUnit([stores.$searchType, stores.$searchValue, stores.$pending]);

  return (
    <Styled.Container>
      <SearchStrategyTabs accent type="button" size={32}>
        <Tab id="person" text="Физические лица" />
        <Tab id="corp" text="Юридические лица" />
      </SearchStrategyTabs>
      <Spacer samespace space="s16" />
      <Input
        waiting={pending ? ({inputSize}) => <InputLoader inputSize={inputSize} /> : null}
        onKeyDown={({key}) => key === 'Enter' && onEnterPressed()}
        value={searchValue}
        onChange={({target: {value}}) => events.onSearchValueChangedEvent(value)}
        onClear={() => events.onSearchValueChangedEvent('')}
        placeholder={
          searchType === ESearchType.person ? 'Введите паспорт или RBO-ID' : 'Введите наименование компании или ИНН'
        }
        type={searchType === ESearchType.person ? 'number' : 'text'}
      />
    </Styled.Container>
  );
};
