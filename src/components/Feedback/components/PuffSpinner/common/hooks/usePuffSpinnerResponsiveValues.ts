import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { DEFAULT_PUFF_SPINNER_IS_VISIBLE, DEFAULT_PUFF_SPINNER_SIZE } from '../constants';
import type { PuffSpinnerProps, PuffSpinnerSize } from '../types';

type UsePuffSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<PuffSpinnerProps<Element>, 'isVisible' | 'radius' | 'size'>
>;

const usePuffSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UsePuffSpinnerResponsiveValuesProps<Element>
) => {
	const {
		isVisible: isVisibleProp = DEFAULT_PUFF_SPINNER_IS_VISIBLE,
		radius: radiusProp = DEFAULT_RADIUS,
		size: sizeProp = DEFAULT_PUFF_SPINNER_SIZE
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const size = useGetResponsiveValue<PuffSpinnerSize>(sizeProp);

	return { isVisible, radius, size };
};

export default usePuffSpinnerResponsiveValues;
