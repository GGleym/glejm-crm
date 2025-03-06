import {Spacer} from '@mtsdengi/uikit-fintech';
import {InfoItem} from './ui';
import {v4 as uuid} from 'uuid';

type ClientInfoBarProps = {
  /** Элементы */
  items: {label: string; value: string}[];
};

export const ClientInfoBar = ({items}: ClientInfoBarProps) =>
  items.map((itemProps, index, itemsArr) => (
    <>
      <InfoItem key={uuid()} {...itemProps} />
      {index < itemsArr.length - 1 && <Spacer space="s12" />}
    </>
  ));
