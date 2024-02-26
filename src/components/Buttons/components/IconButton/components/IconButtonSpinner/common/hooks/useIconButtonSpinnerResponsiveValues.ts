import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { DEFAULT_ICON_BUTTON_SPINNER_VARIANT } from '../constants';
import type { IconButtonSpinnerProps, IconButtonSpinnerVariant } from '../types';

type UseIconButtonSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<IconButtonSpinnerProps<Element>, 'variant'>
>;

const useIconButtonSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseIconButtonSpinnerResponsiveValuesProps<Element>
) => {
	const { variant: variantProp = DEFAULT_ICON_BUTTON_SPINNER_VARIANT } = props;

	const variant = useGetResponsiveValue<IconButtonSpinnerVariant>(variantProp);

	return { variant };
};

export default useIconButtonSpinnerResponsiveValues;
