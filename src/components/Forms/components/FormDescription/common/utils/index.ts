import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getFormDescriptionID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-form-description`;
};
