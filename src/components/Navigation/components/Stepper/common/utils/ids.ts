import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getStepperID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-stepper`;
};

export const getStepListID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-stepper-list`;
};

export const getStepID = (id: string, index: number): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-stepper-list-${index}-step`;
};

export const getStepTitleID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-title`;
};

export const getStepSubtitleID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-subtitle`;
};

export const getStepPanelsID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-stepper-panels`;
};

export const getStepPanelID = (id: string, index: number): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-stepper-panels-${index}-panel`;
};
