import {type ReactNode, type PropsWithChildren } from 'react'

// TODO: заменить на кит g2
import { Spacer, Text } from '@mtsbank/ui-kit'

export type CellInfoProps = PropsWithChildren<{
  label: string;
  children: ReactNode;
  isCustomContent?: boolean;
}>;

export const CellInfo = ({label, children, isCustomContent = false}: CellInfoProps) => (
  <>
    <Text fontWeight="regular" as="p" size="md" color="#969FA8">{label}</Text>
    <Spacer space={8} />
    {isCustomContent ? children : <Text fontWeight="regular" as="p" size="md">{children}</Text>}
  </>
);
