import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getDummyTabsID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab`;
};

export const getDummyTabListID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-list`;
};

export const getDummyTabID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-list-${index}-tab`;
};

export const getDummyTabPanelsID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-panels`;
};

export const getDummyTabPanelID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tab-panels-${index}-panel`;
};
