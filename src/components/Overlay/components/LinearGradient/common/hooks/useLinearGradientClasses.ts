import classNames from 'classnames';

import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_LINEAR_GRADIENT_DIRECTION,
	DEFAULT_LINEAR_GRADIENT_FROM,
	DEFAULT_LINEAR_GRADIENT_MIDDLE,
	DEFAULT_LINEAR_GRADIENT_TO
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
		direction: directionProp = DEFAULT_LINEAR_GRADIENT_DIRECTION,
		from: fromProp = DEFAULT_LINEAR_GRADIENT_FROM,
		middle: middleProp = DEFAULT_LINEAR_GRADIENT_MIDDLE,
		to: toProp = DEFAULT_LINEAR_GRADIENT_TO
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
		(classes) => classes.backgrounds.gradient_middle[middle?.position || DEFAULT_LINEAR_GRADIENT_MIDDLE.position]
	);
	const middleColorClassName = useGetColor({
		color: middle?.color || DEFAULT_LINEAR_GRADIENT_MIDDLE.color,
		colorMode: middle?.colorMode || DEFAULT_LINEAR_GRADIENT_MIDDLE.colorMode,
		colorType: 'color',
		classType: 'gradient_middle_color',
		hueType: middle?.hueType || DEFAULT_LINEAR_GRADIENT_MIDDLE.hueType
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
