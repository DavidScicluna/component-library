import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE, DEFAULT_TAIL_SPIN_SPINNER_SIZE } from '../constants';
import type { TailSpinSpinnerProps, TailSpinSpinnerSize } from '../types';

type UseTailSpinSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<TailSpinSpinnerProps<Element>, 'isVisible' | 'radius' | 'size'>
>;

const useTailSpinSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseTailSpinSpinnerResponsiveValuesProps<Element>
) => {
	const {
		isVisible: isVisibleProp = DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE,
		radius: radiusProp = DEFAULT_RADIUS,
		size: sizeProp = DEFAULT_TAIL_SPIN_SPINNER_SIZE
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const size = useGetResponsiveValue<TailSpinSpinnerSize>(sizeProp);

	return { isVisible, radius, size };
};

export default useTailSpinSpinnerResponsiveValues;
