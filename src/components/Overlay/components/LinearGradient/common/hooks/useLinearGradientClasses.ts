import classNames from 'classnames';

import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE__,
	__DEFAULT_LINEAR_GRADIENT_TO__
} from '../constants';
import type { LinearGradientProps } from '../types';

import useLinearGradientResponsiveValues from './useLinearGradientResponsiveValues';

type UseLinearGradientClassesProps<Element extends PolymorphicElementType> = Pick<
	LinearGradientProps<Element>,
	'direction' | 'from' | 'middle' | 'to'
>;
type UseLinearGradientClassesReturn = ClassName;

const useLinearGradientClasses = <Element extends PolymorphicElementType>(
	props: UseLinearGradientClassesProps<Element>
): UseLinearGradientClassesReturn => {
	const {
		direction: directionProp = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from: fromProp = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle: middleProp = __DEFAULT_LINEAR_GRADIENT_MIDDLE__,
		to: toProp = __DEFAULT_LINEAR_GRADIENT_TO__
	} = props;

	const { direction, from, middle, to } = useLinearGradientResponsiveValues<Element>({
		direction: directionProp,
		from: fromProp,
		middle: middleProp,
		to: toProp
	});

	const gradientClassName = useGetClass((classes) => classes.backgrounds.gradient[direction]);

	const fromPosClassName = useGetClass((classes) => classes.backgrounds.gradient_from[from.position]);
	const fromColorClassName = useGetColor({
		color: from.color,
		colorMode: from.colorMode,
		colorType: 'color',
		classType: 'gradient_from_color',
		hueType: from?.hueType
	});

	const middlePosClassName = useGetClass(
		(classes) =>
			classes.backgrounds.gradient_middle[middle?.position || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.position]
	);
	const middleColorClassName = useGetColor({
		color: middle?.color || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.color,
		colorMode: middle?.colorMode || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.colorMode,
		colorType: 'color',
		classType: 'gradient_middle_color',
		hueType: middle?.hueType || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.hueType
	});

	const toPosClassName = useGetClass((classes) => classes.backgrounds.gradient_to[to.position]);
	const toColorClassName = useGetColor({
		color: to.color,
		colorMode: to.colorMode,
		colorType: 'color',
		classType: 'gradient_to_color',
		hueType: to?.hueType
	});

	return classNames(gradientClassName, {
		[fromPosClassName]: !!from,
		[fromColorClassName]: !!from,
		[middlePosClassName]: !!middle,
		[middleColorClassName]: !!middle,
		[toPosClassName]: !!to,
		[toColorClassName]: !!to
	});
};

export default useLinearGradientClasses;
