import {Icon} from '@mtsbank/ui-kit';
import {Flex, granatLightTheme, Text} from '@mtsdengi/uikit-fintech';
import {PropsWithChildren} from 'react';

type PrivilegeCheckboxProps = PropsWithChildren<{
  /** Признак активности */
  checked: boolean;
}>;

export const PrivilegeCheckbox = ({checked, children}: PrivilegeCheckboxProps) => (
  <Flex gap={granatLightTheme.spacings.s4} alignItems="center">
    <Icon icon={checked ? 'icon-24/SuperSuccess' : 'icon-24/SuperFail'} />
    <Text font="p4RegularText">{children}</Text>
  </Flex>
);
