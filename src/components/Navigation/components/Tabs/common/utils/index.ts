import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getTabsID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-tabs`;
};

export const getTabListID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-tabs-list`;
};

export const getTabID = (id: string, index: number): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-tabs-list-${index}-tab`;
};

export const getTabPanelsID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-tabs-panels`;
};

export const getTabPanelID = (id: string, index: number): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-tabs-panels-${index}-panel`;
};
