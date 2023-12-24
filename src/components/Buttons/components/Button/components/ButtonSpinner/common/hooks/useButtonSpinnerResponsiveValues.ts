import { useGetResponsiveValue } from '@common/hooks';

import { __DEFAULT_BUTTON_SPINNER_VARIANT__ } from '../constants';
import type { ButtonSpinnerProps, ButtonSpinnerVariant } from '../types';

type UseButtonSpinnerResponsiveValuesProps = Partial<Pick<ButtonSpinnerProps, 'variant'>>;

const useButtonSpinnerResponsiveValues = (props: UseButtonSpinnerResponsiveValuesProps) => {
	const { variant: variantProp = __DEFAULT_BUTTON_SPINNER_VARIANT__ } = props;

	const variant = useGetResponsiveValue<ButtonSpinnerVariant>(variantProp);

	return { variant };
};

export default useButtonSpinnerResponsiveValues;
