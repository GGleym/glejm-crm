import {type ReactElement} from 'react';

import {Button, CellText, Spacer, Flex as KitFlex, Text, granatLightTheme} from '@mtsdengi/uikit-fintech';

import {Table} from '~/kit/ui/table';
import {Flex} from '~/ui/flex';

import {PRIVILEGES_TABLE_COLUMNS} from '../../model/consts';
import {type PackageInfo} from '../../model/types';

import {PrivilegeCheckbox} from './privilege-checkbox';

type CurrentPackageProps = {
  /** Информация о продукте */
  packageInfo: PackageInfo;
  /** Условия обслуживания */
  serviceTerms: {id: string; label: string; caption: string}[];
  /** Дополнительные услуги */
  additionalServices: {id: string; checked: boolean; label: string}[];
  /** Привилегии */
  privileges: Record<string, string | ReactElement>[];
};

export const CurrentPackage = ({
  packageInfo: {name, info},
  serviceTerms,
  additionalServices,
  privileges,
}: CurrentPackageProps) => (
  <>
    <Text font="h4Comp">{name}</Text>
    <Spacer space="s16" />

    <Flex container columns={4}>
      {info.map(({id, label, caption}) => (
        <Flex col xs={1}>
          <CellText reverse key={id} label={label} caption={caption} />
        </Flex>
      ))}
    </Flex>

    <Spacer space="s32" />

    <Text font="h4Comp">Условия обслуживания</Text>
    <Spacer space="s16" />

    <Flex container rowSpacing={1} columns={4}>
      {serviceTerms.map(({id, label, caption}) => (
        <Flex col xs={1}>
          <CellText reverse key={id} label={label} caption={caption} />
        </Flex>
      ))}
    </Flex>

    <Spacer space="s24" />

    <KitFlex gap={granatLightTheme.spacings.s12} alignItems="center">
      {additionalServices.map(({id, label, checked}) => (
        <PrivilegeCheckbox key={id} checked={checked}>
          {label}
        </PrivilegeCheckbox>
      ))}
    </KitFlex>

    <Spacer space="s32" />

    <Table columns={PRIVILEGES_TABLE_COLUMNS} data={privileges} />

    <Spacer space="s32" />

    <Button size={32} onClick={() => {}} variant="negative">
      Отключить
    </Button>
  </>
);
