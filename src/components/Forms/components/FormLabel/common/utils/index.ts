import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getFormLabelID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-form-label`;
};
