import { DEFAULT_COLOR } from '@common/constants';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import type { FormLabelUniqueProps } from '../types';

type UseFormLabelStylesProps = Pick<FormLabelUniqueProps, 'color'>;
type UseFormLabelStylesReturn = Style;

const useFormLabelStyles = (props: UseFormLabelStylesProps): UseFormLabelStylesReturn => {
	const { color = DEFAULT_COLOR } = props;

	return {
		color: checkColorType(color) === 'other' ? color : undefined
	};
};

export default useFormLabelStyles;
