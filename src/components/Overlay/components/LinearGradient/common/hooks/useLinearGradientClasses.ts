import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, GradientFromMiddleToClass } from '@common/types';

import {
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE__,
	__DEFAULT_LINEAR_GRADIENT_TO__
} from '../constants';
import type { LinearGradientDirection, LinearGradientProps } from '../types';

import useLinearGradientResponsiveValues from './useLinearGradientResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseLinearGradientClassesProps = Pick<LinearGradientProps, 'direction' | 'from' | 'middle' | 'to'>;
type UseLinearGradientClassesReturn = ClassName;

const useLinearGradientClasses = (props: UseLinearGradientClassesProps): UseLinearGradientClassesReturn => {
	const {
		direction: directionProp = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from: fromProp = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle: middleProp = __DEFAULT_LINEAR_GRADIENT_MIDDLE__,
		to: toProp = __DEFAULT_LINEAR_GRADIENT_TO__
	} = props;

	const { direction, from, middle, to } = useLinearGradientResponsiveValues({
		direction: directionProp,
		from: fromProp,
		middle: middleProp,
		to: toProp
	});

	const gradientClassName = useGetClass<LinearGradientDirection>(direction, ['backgrounds', 'gradient']);

	const fromPosClassName = useGetClass<GradientFromMiddleToClass>(from.position, ['backgrounds', 'gradient_from']);
	const fromColorClassName = useGetColor({
		color: from.color,
		colorMode: from.colorMode,
		colorType: 'color',
		classType: 'gradient_from_color',
		hueType: from?.hueType
	});

	const middlePosClassName = useGetClass<GradientFromMiddleToClass>(
		middle?.position || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.position,
		['backgrounds', 'gradient_middle']
	);
	const middleColorClassName = useGetColor({
		color: middle?.color || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.color,
		colorMode: middle?.colorMode || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.colorMode,
		colorType: 'color',
		classType: 'gradient_middle_color',
		hueType: middle?.hueType || __DEFAULT_LINEAR_GRADIENT_MIDDLE__.hueType
	});

	const toPosClassName = useGetClass<GradientFromMiddleToClass>(to.position, ['backgrounds', 'gradient_to']);
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
