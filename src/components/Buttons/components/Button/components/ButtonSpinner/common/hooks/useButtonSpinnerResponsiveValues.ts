import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { DEFAULT_BUTTON_SPINNER_VARIANT } from '../constants';
import type { ButtonSpinnerProps, ButtonSpinnerVariant } from '../types';

type UseButtonSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<ButtonSpinnerProps<Element>, 'variant'>
>;

const useButtonSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseButtonSpinnerResponsiveValuesProps<Element>
) => {
	const { variant: variantProp = DEFAULT_BUTTON_SPINNER_VARIANT } = props;

	const variant = useGetResponsiveValue<ButtonSpinnerVariant>(variantProp);

	return { variant };
};

export default useButtonSpinnerResponsiveValues;
