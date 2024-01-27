import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { __DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE__, __DEFAULT_TAIL_SPIN_SPINNER_SIZE__ } from '../constants';
import type { TailSpinSpinnerProps, TailSpinSpinnerSize } from '../types';

type UseTailSpinSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<TailSpinSpinnerProps<Element>, 'isVisible' | 'radius' | 'size'>
>;

const useTailSpinSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseTailSpinSpinnerResponsiveValuesProps<Element>
) => {
	const {
		isVisible: isVisibleProp = __DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		size: sizeProp = __DEFAULT_TAIL_SPIN_SPINNER_SIZE__
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const size = useGetResponsiveValue<TailSpinSpinnerSize>(sizeProp);

	return { isVisible, radius, size };
};

export default useTailSpinSpinnerResponsiveValues;
