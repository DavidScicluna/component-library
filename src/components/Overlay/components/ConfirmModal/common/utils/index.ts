import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getConfirmModalID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-confirm-modal`;
};

export const getConfirmModalTitleID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-confirm-modal-title`;
};

export const getConfirmModalSubtitleID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-confirm-modal-subtitle`;
};
