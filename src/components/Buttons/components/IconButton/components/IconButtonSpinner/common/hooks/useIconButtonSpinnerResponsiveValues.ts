import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { __DEFAULT_ICON_BUTTON_SPINNER_VARIANT__ } from '../constants';
import type { IconButtonSpinnerProps, IconButtonSpinnerVariant } from '../types';

type UseIconButtonSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<IconButtonSpinnerProps<Element>, 'variant'>
>;

const useIconButtonSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseIconButtonSpinnerResponsiveValuesProps<Element>
) => {
	const { variant: variantProp = __DEFAULT_ICON_BUTTON_SPINNER_VARIANT__ } = props;

	const variant = useGetResponsiveValue<IconButtonSpinnerVariant>(variantProp);

	return { variant };
};

export default useIconButtonSpinnerResponsiveValues;
