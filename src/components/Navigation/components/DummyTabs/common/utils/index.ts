import memoize from 'micro-memoize';

import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getDummyTabsID = memoize((id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab`;
});

export const getDummyTabListID = memoize((id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-list`;
});

export const getDummyTabID = memoize((id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-list-${index}-tab`;
});

export const getDummyTabPanelsID = memoize((id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-panels`;
});

export const getDummyTabPanelID = memoize((id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-panels-${index}-panel`;
});
