import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getConfirmModalID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-confirm-modal`;
};

export const getConfirmModalTitleID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-confirm-modal-title`;
};

export const getConfirmModalSubtitleID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-confirm-modal-subtitle`;
};
