import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getModalID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-modal`;
};

export const getModalTitleID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-modal-title`;
};

export const getModalSubtitleID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-modal-subtitle`;
};
