import type { ElementType } from 'react';

import classNames from 'classnames';

import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, GradientFromMiddleToClass } from '@common/types';

import {
	__DEFAULT_LINEAR_GRADIENT_COLOR__,
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM_POS__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE_POS__,
	__DEFAULT_LINEAR_GRADIENT_TO_POS__
} from '../constants';
import type { LinearGradientDirection, LinearGradientProps } from '../types';

type UseLinearGradientClassesProps<Element extends ElementType> = Pick<
	LinearGradientProps<Element>,
	'color' | 'colorMode' | 'direction' | 'fromPos' | 'middlePos' | 'toPos'
>;
type UseLinearGradientClassesReturn = ClassName;

const useLinearGradientClasses = <Element extends ElementType>(
	props: UseLinearGradientClassesProps<Element>
): UseLinearGradientClassesReturn => {
	const { colorMode: __DEFAULT_LINEAR_GRADIENT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_LINEAR_GRADIENT_COLOR__,
		colorMode = __DEFAULT_LINEAR_GRADIENT_COLORMODE__,
		direction = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		fromPos = __DEFAULT_LINEAR_GRADIENT_FROM_POS__,
		middlePos = __DEFAULT_LINEAR_GRADIENT_MIDDLE_POS__,
		toPos = __DEFAULT_LINEAR_GRADIENT_TO_POS__
	} = props;

	const gradientClassName = useGetClass<LinearGradientDirection>(direction, ['backgrounds', 'gradient']);

	const fromPosClassName = useGetClass<GradientFromMiddleToClass>(fromPos, ['backgrounds', 'gradient']);
	const fromColorClassName = useGetColor({
		color: color.from,
		colorMode,
		colorType: 'color',
		classType: 'gradient_from_color',
		hueType: 'color'
	});

	const middlePosClassName = useGetClass<GradientFromMiddleToClass>(middlePos, ['backgrounds', 'gradient']);
	const middleColorClassName = useGetColor({
		color: color.middle,
		colorMode,
		colorType: 'color',
		classType: 'gradient_middle_color',
		hueType: 'color'
	});

	const toPosClassName = useGetClass<GradientFromMiddleToClass>(toPos, ['backgrounds', 'gradient']);
	const toColorClassName = useGetColor({
		color: color.to,
		colorMode,
		colorType: 'color',
		classType: 'gradient_to_color',
		hueType: 'color'
	});

	return classNames(gradientClassName, {
		[fromPosClassName]: !!color.from,
		[fromColorClassName]: !!color.from,
		[middlePosClassName]: !!color.middle,
		[middleColorClassName]: !!color.middle,
		[toPosClassName]: !!color.to,
		[toColorClassName]: !!color.to
	});
};

export default useLinearGradientClasses;
