import {theme} from '@mtsbank/ui-kit';

import {BadgeStatus, type Config} from './types';

const BADGE_COLOR_MAP: {
  [k in BadgeStatus]: string;
} = {
  NEW: '#FAC031',
  PROCESS: '#007CFF',
  READY: '#00525D',
  COMPLETE: '#26CD58',
  REJECT: '#F95721',
  CANCEL: '#F95721',
  ERROR: '#E30611',
  DRAFT: '#969FA8',
  DEFAULT: theme.colors.supportColors.s100,
};

/**
 * Маппер статус в цвет.
 *
 * @param type Статус.
 * @param config Нестандартные статусы и/или цвета.
 */
export const prepareBadgeStatusToColor = (type: string = BadgeStatus.DEFAULT, config?: Config) => {
  console.log(type);

  return config?.[type] ?? BADGE_COLOR_MAP[type as BadgeStatus] ?? BADGE_COLOR_MAP[BadgeStatus.DEFAULT];
};
