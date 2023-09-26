import memoize from 'micro-memoize';

import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getTabsID = memoize((id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab`;
});

export const getTabListID = memoize((id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-list`;
});

export const getTabID = memoize((id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-list-${index}-tab`;
});

export const getTabPanelsID = memoize((id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-panels`;
});

export const getTabPanelID = memoize((id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-panels-${index}-panel`;
});
