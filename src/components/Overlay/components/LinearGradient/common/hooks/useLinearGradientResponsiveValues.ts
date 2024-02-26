import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	DEFAULT_LINEAR_GRADIENT_DIRECTION,
	DEFAULT_LINEAR_GRADIENT_FROM,
	DEFAULT_LINEAR_GRADIENT_MIDDLE,
	DEFAULT_LINEAR_GRADIENT_TO
} from '../constants';
import type { LinearGradientColor, LinearGradientDirection, LinearGradientProps } from '../types';

type UseLinearGradientResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<LinearGradientProps<Element>, 'direction' | 'from' | 'middle' | 'to'>
>;

const useLinearGradientResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseLinearGradientResponsiveValuesProps<Element>
) => {
	const {
		direction: directionProp = DEFAULT_LINEAR_GRADIENT_DIRECTION,
		from: fromProp = DEFAULT_LINEAR_GRADIENT_FROM,
		middle: middleProp = DEFAULT_LINEAR_GRADIENT_MIDDLE,
		to: toProp = DEFAULT_LINEAR_GRADIENT_TO
	} = props;

	const direction = useGetResponsiveValue<LinearGradientDirection>(directionProp);

	const from = useGetResponsiveValue<LinearGradientColor>(fromProp);
	const middle = useGetResponsiveValue<LinearGradientColor>(middleProp);
	const to = useGetResponsiveValue<LinearGradientColor>(toProp);

	return { direction, from, middle, to };
};

export default useLinearGradientResponsiveValues;
