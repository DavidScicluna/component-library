import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE, DEFAULT_THREE_DOTS_SPINNER_SIZE } from '../constants';
import type { ThreeDotsSpinnerProps, ThreeDotsSpinnerSize } from '../types';

type UseThreeDotsSpinnerResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<ThreeDotsSpinnerProps<Element>, 'isVisible' | 'radius' | 'size'>
>;

const useThreeDotsSpinnerResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseThreeDotsSpinnerResponsiveValuesProps<Element>
) => {
	const {
		isVisible: isVisibleProp = DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE,
		radius: radiusProp = DEFAULT_RADIUS,
		size: sizeProp = DEFAULT_THREE_DOTS_SPINNER_SIZE
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const size = useGetResponsiveValue<ThreeDotsSpinnerSize>(sizeProp);

	return { isVisible, radius, size };
};

export default useThreeDotsSpinnerResponsiveValues;
