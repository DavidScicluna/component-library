import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getFormLabelID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-form-label`;
};
