import type {ReactElement, ReactNode} from 'react';

import {TAB_ICONS} from './constants';

export type SnapshotView = {
  /** ID таба */
  id: string;
  /** Текст таба */
  title?: string;
  /** Тип иконки */
  iconType?: keyof typeof TAB_ICONS;
  /** Иконка */
  icon?: ReactElement;
  /** Признак наличия уведомления */
  hasNotification?: boolean;
  /** Состояние иконки */
  iconCondition?: 'notification' | 'loading' | 'default';
};

export type ViewState = 'fail' | 'done' | 'fallback';

export type View = SnapshotView & {
  /** Контент страницы */
  content: ReactNode;
};

export type ScreenState = {
  /** Список вьюх */
  views: View[];
  /** Текущее состояние */
  currentState: ViewState;
  /** ID текущей вьюхи */
  currentViewID: string | null;
};
