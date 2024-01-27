import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { __DEFAULT_PUFF_SPINNER_IS_VISIBLE__, __DEFAULT_PUFF_SPINNER_SIZE__ } from '../constants';
import type { PuffSpinnerProps, PuffSpinnerSize } from '../types';

type UsePuffSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<PuffSpinnerProps<Element>, 'isVisible' | 'radius' | 'size'>
>;

const usePuffSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UsePuffSpinnerResponsiveValuesProps<Element>
) => {
	const {
		isVisible: isVisibleProp = __DEFAULT_PUFF_SPINNER_IS_VISIBLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		size: sizeProp = __DEFAULT_PUFF_SPINNER_SIZE__
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const size = useGetResponsiveValue<PuffSpinnerSize>(sizeProp);

	return { isVisible, radius, size };
};

export default usePuffSpinnerResponsiveValues;
