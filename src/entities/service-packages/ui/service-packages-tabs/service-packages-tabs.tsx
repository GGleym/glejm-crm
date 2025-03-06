import {useState} from 'react';

import {reflect} from '@effector/reflect';

import {Spacer, Tab, Tabs} from '@mtsdengi/uikit-fintech';

import {CurrentPackage as CurrentPackageView} from '../current-package';
import {ConnectionHistory as ConnectionHistoryView} from '../connection-history';
import {stores} from '../../model';
import {PACKAGE_TABS} from '../../model/consts';

const CurrentPackage = reflect({
  view: CurrentPackageView,
  bind: {
    serviceTerms: stores.$serviceTerms,
    packageInfo: stores.$currentPackageInfo,
    additionalServices: stores.$additionalServices,
    privileges: stores.$privileges,
  },
});

const ConnectionHistory = reflect({
  view: ConnectionHistoryView,
  bind: {
    packages: stores.$historyPackagesInfo,
  },
});

const CASES = {
  current: CurrentPackage,
  connectionHistory: ConnectionHistory,
} as const;

export const ServicePackagesTabs = () => {
  const [selected, setSelected] = useState<string | undefined>(PACKAGE_TABS[0].key);

  const Case = CASES[selected as keyof typeof CASES];

  return (
    <>
      <Tabs size={52} type="stroke" activeTab={selected} onActiveTabChange={setSelected}>
        {PACKAGE_TABS.map(({key, tabName}) => (
          <Tab key={key} id={key} text={tabName} />
        ))}
      </Tabs>
      <Spacer space="s16" />
      {Case && <Case />}
    </>
  );
};
