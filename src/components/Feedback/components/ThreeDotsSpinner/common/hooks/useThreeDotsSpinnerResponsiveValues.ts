import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { __DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE__, __DEFAULT_THREE_DOTS_SPINNER_SIZE__ } from '../constants';
import type { ThreeDotsSpinnerProps, ThreeDotsSpinnerSize } from '../types';

type UseThreeDotsSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<ThreeDotsSpinnerProps<Element>, 'isVisible' | 'radius' | 'size'>
>;

const useThreeDotsSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseThreeDotsSpinnerResponsiveValuesProps<Element>
) => {
	const {
		isVisible: isVisibleProp = __DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		size: sizeProp = __DEFAULT_THREE_DOTS_SPINNER_SIZE__
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const size = useGetResponsiveValue<ThreeDotsSpinnerSize>(sizeProp);

	return { isVisible, radius, size };
};

export default useThreeDotsSpinnerResponsiveValues;
