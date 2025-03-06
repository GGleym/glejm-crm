import {useState} from 'react';

import {Tab, Tabs} from '@mtsdengi/uikit-fintech';
import {Spacer} from '@mtsbank/ui-kit';

import {theme} from '~/consts/theme';

import {PersonalInfoCard} from '../personal-info-card';
import {Documents} from '../documents';
import {FinancialCondition} from '../financial-condition';
import {Contacts} from '../contacts';
import {Occupation} from '../occupation';

import type {
  ContactsProps,
  FinConditionProps,
  DocumentsProps,
  OccupationProps,
  PersonalInfoCardProps,
} from '../../lib/types';

import {TABS} from './model';

const CASES = {
  info: PersonalInfoCard,
  docs: Documents,
  contacts: Contacts,
  occupation: Occupation,
  finance: FinancialCondition,
} as const;

export type ClientTabsProps = PersonalInfoCardProps &
  DocumentsProps &
  ContactsProps &
  OccupationProps &
  FinConditionProps;

export const PhysicalClientTabs = (props: ClientTabsProps) => {
  const [selected, setSelected] = useState<string | undefined>(TABS[0].key);

  const Case = CASES[selected as keyof typeof CASES];

  return (
    <>
      <Tabs size={52} type="stroke" activeTab={selected} onActiveTabChange={setSelected}>
        {TABS.map(({key, tabName}) => (
          <Tab key={key} id={key} text={tabName} />
        ))}
      </Tabs>
      <Spacer space={theme.spacings.md} />
      {Case && <Case {...props} />}
    </>
  );
};
