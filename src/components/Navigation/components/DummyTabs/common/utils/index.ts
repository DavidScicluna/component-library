import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getDummyTabsID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tabs`;
};

export const getDummyTabListID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tabs-list`;
};

export const getDummyTabID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tabs-list-${index}-tab`;
};

export const getDummyTabPanelsID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tabs-panels`;
};

export const getDummyTabPanelID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-dummy-${id}-tabs-panels-${index}-panel`;
};
