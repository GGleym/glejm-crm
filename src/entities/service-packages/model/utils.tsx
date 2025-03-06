import {type Store} from 'effector';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale/ru';
import {v4 as uuid} from 'uuid';

import {declOfNum} from '@mtsbank/ui-kit';
import {Icon, isNullable} from '@mtsdengi/uikit-fintech';

import {getValueWithDashFallback} from '~/utils/getValuesWithDashFallback';

import {type Package} from './types';
import {DECL_TITLES} from './consts';

export const getTimeFromMs = (ms?: number) => {
  if (!ms) {
    console.error('Передайте корректное число в миллисекундах');

    return '-';
  }

  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (!hours) {
    return `${minutes} ${declOfNum(minutes, DECL_TITLES.minutes)}`;
  }

  if (!days) {
    return `${hours} ${declOfNum(hours, DECL_TITLES.hours)}`;
  }

  if (!months) {
    return `${days} ${declOfNum(days, DECL_TITLES.days)}`;
  }

  return `${months} ${declOfNum(months, DECL_TITLES.months)} ${days} ${declOfNum(days, DECL_TITLES.days)}`;
};

export const preparePrivilege = (value: string) => {
  if (['false', 'true'].includes(value)) {
    return value === 'true' ? <Icon iconPath="granat/check/size-16-style-outline" /> : '';
  }

  return value;
};

export const preparePackageInfo = (packageData: Package | null) => {
  if (isNullable(packageData)) {
    return {name: '', info: []};
  }

  const {name, openDateTime, closeDateTime, managerName, openerName, closerName, lifetimeTimestamp} = packageData;

  return {
    name,
    info: [
      {id: uuid(), caption: 'Дата подключения', label: format(openDateTime, 'dd.MM.yyyy HH:mm:ss', {locale: ru})},
      ...(openerName ? [{id: uuid(), caption: 'Подключивший', label: openerName}] : []),
      ...(closeDateTime
        ? [{id: uuid(), caption: 'Дата отключения', label: format(closeDateTime, 'dd.MM.yyyy HH:mm:ss', {locale: ru})}]
        : []),
      ...(closerName ? [{id: uuid(), caption: 'Отключивший', label: closerName}] : []),
      {id: uuid(), caption: 'Персональный менеджер', label: getValueWithDashFallback(managerName)},
      {id: uuid(), caption: 'Срок жизни на пакет услуг', label: getTimeFromMs(lifetimeTimestamp)},
    ],
  };
};

export const getPackageInfo = ($store: Store<Package | null>) => $store.map(preparePackageInfo);
