import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getTabsID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab`;
};

export const getTabListID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-list`;
};

export const getTabID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-list-${index}-tab`;
};

export const getTabPanelsID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-panels`;
};

export const getTabPanelID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-tab-panels-${index}-panel`;
};
