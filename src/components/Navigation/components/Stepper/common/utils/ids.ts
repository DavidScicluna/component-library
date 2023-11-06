import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getStepperID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-stepper`;
};

export const getStepListID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-stepper-list`;
};

export const getStepID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-stepper-list-${index}-step`;
};

export const getStepTitleID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-title`;
};

export const getStepSubtitleID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-subtitle`;
};

export const getStepPanelsID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-stepper-panels`;
};

export const getStepPanelID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-stepper-panels-${index}-panel`;
};
