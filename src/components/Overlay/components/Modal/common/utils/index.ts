import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getModalID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-modal`;
};

export const getModalTitleID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-modal-title`;
};

export const getModalSubtitleID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-modal-subtitle`;
};
