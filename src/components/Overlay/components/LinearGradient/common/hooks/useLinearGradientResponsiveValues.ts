import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE__,
	__DEFAULT_LINEAR_GRADIENT_TO__
} from '../constants';
import type { LinearGradientColor, LinearGradientDirection, LinearGradientProps } from '../types';

type UseLinearGradientResponsiveValuesProps = Partial<
	Pick<LinearGradientProps, 'direction' | 'from' | 'middle' | 'to'>
>;

const useLinearGradientResponsiveValues = (props: UseLinearGradientResponsiveValuesProps) => {
	const {
		direction: directionProp = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from: fromProp = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle: middleProp = __DEFAULT_LINEAR_GRADIENT_MIDDLE__,
		to: toProp = __DEFAULT_LINEAR_GRADIENT_TO__
	} = props;

	const direction = useGetResponsiveValue<LinearGradientDirection>(directionProp);

	const from = useGetResponsiveValue<LinearGradientColor>(fromProp);
	const middle = useGetResponsiveValue<LinearGradientColor>(middleProp);
	const to = useGetResponsiveValue<LinearGradientColor>(toProp);

	return { direction, from, middle, to };
};

export default useLinearGradientResponsiveValues;
