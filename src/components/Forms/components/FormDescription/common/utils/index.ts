import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getFormDescriptionID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-form-description`;
};
