import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, GradientFromMiddleToClass } from '@common/types';

import {
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE__,
	__DEFAULT_LINEAR_GRADIENT_TO__
} from '../constants';
import type { LinearGradientDirection, LinearGradientProps } from '../types';

type UseLinearGradientClassesProps<Element extends ElementType> = Pick<
	LinearGradientProps<Element>,
	'direction' | 'from' | 'middle' | 'to'
>;
type UseLinearGradientClassesReturn = ClassName;

const useLinearGradientClasses = <Element extends ElementType>(
	props: UseLinearGradientClassesProps<Element>
): UseLinearGradientClassesReturn => {
	const {
		direction = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle = __DEFAULT_LINEAR_GRADIENT_MIDDLE__,
		to = __DEFAULT_LINEAR_GRADIENT_TO__
	} = props;

	const gradientClassName = useGetClass<LinearGradientDirection>(direction, ['backgrounds', 'gradient']);

	const fromPosClassName = useGetClass<GradientFromMiddleToClass>(from.position, ['backgrounds', 'gradient']);
	const fromColorClassName = useGetColor({
		color: from.color,
		colorMode: from.colorMode,
		colorType: 'color',
		classType: 'gradient_from_color',
		hueType: from.hueType
	});

	const middlePosClassName = useGetClass<GradientFromMiddleToClass>(middle.position, ['backgrounds', 'gradient']);
	const middleColorClassName = useGetColor({
		color: middle.color,
		colorMode: middle.colorMode,
		colorType: 'color',
		classType: 'gradient_middle_color',
		hueType: middle.hueType
	});

	const toPosClassName = useGetClass<GradientFromMiddleToClass>(to.position, ['backgrounds', 'gradient']);
	const toColorClassName = useGetColor({
		color: to.color,
		colorMode: to.colorMode,
		colorType: 'color',
		classType: 'gradient_to_color',
		hueType: to.hueType
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
