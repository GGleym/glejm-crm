import {DIVIDER_WIDTH, MAX_TAB_WIDTH, MIN_TAB_WIDTH, MORE_BUTTON_WIDTH} from '../constants';
import {type SnapshotView} from '../types';

export const calculateVisibleTabs = (tabs: SnapshotView[], containerWidth: number, hasActiveTab: boolean) => {
  if (!tabs.length) {
    return tabs;
  }

  const usableWidth = hasActiveTab ? containerWidth - MAX_TAB_WIDTH : containerWidth;
  const possibleTabs = Math.floor(usableWidth / MIN_TAB_WIDTH);
  const totalDividersWidth = (possibleTabs - 1) * DIVIDER_WIDTH;

  const calculateTabsCount = (extraWidth = 0) =>
    Math.floor((usableWidth - totalDividersWidth - extraWidth) / MIN_TAB_WIDTH) + (hasActiveTab ? 1 : 0);

  const fittingTabsCount = calculateTabsCount();
  const adjustedTabsCount = calculateTabsCount(MORE_BUTTON_WIDTH);
  const finalTabsCount = Math.min(possibleTabs, fittingTabsCount);

  return tabs.slice(0, tabs.length > finalTabsCount ? adjustedTabsCount : finalTabsCount);
};
