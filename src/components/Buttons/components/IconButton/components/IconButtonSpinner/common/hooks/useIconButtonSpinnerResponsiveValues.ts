import { useGetResponsiveValue } from '@common/hooks';

import { __DEFAULT_ICON_BUTTON_SPINNER_VARIANT__ } from '../constants';
import type { IconButtonSpinnerProps, IconButtonSpinnerVariant } from '../types';

type UseIconButtonSpinnerResponsiveValuesProps = Partial<Pick<IconButtonSpinnerProps, 'variant'>>;

const useIconButtonSpinnerResponsiveValues = (props: UseIconButtonSpinnerResponsiveValuesProps) => {
	const { variant: variantProp = __DEFAULT_ICON_BUTTON_SPINNER_VARIANT__ } = props;

	const variant = useGetResponsiveValue<IconButtonSpinnerVariant>(variantProp);

	return { variant };
};

export default useIconButtonSpinnerResponsiveValues;
