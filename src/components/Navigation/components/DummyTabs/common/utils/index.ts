import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getDummyTabsID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-dummy-${id}-tabs`;
};

export const getDummyTabListID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-dummy-${id}-tabs-list`;
};

export const getDummyTabID = (id: string, index: number): string => {
	return `${DEFAULT_CLASS_PREFIX}-dummy-${id}-tabs-list-${index}-tab`;
};

export const getDummyTabPanelsID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-dummy-${id}-tabs-panels`;
};

export const getDummyTabPanelID = (id: string, index: number): string => {
	return `${DEFAULT_CLASS_PREFIX}-dummy-${id}-tabs-panels-${index}-panel`;
};
