import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_DURATION__, __DEFAULT_EASING__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { __DEFAULT_SKELETON_IS_ANIMATED__ } from '../constants';
import type { SkeletonProps } from '../types';

import useSkeletonResponsiveValues from './useSkeletonResponsiveValues';

type UseSkeletonClassesProps<Element extends PolymorphicElementType> = Pick<
	SkeletonProps<Element>,
	'color' | 'colorMode' | 'isAnimated' | 'radius'
>;
type UseSkeletonClassesReturn = ClassName;

const useSkeletonClasses = <Element extends PolymorphicElementType>(
	props: UseSkeletonClassesProps<Element>
): UseSkeletonClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ICON_COLORMODE__,
		isAnimated: isAnimatedProp = __DEFAULT_SKELETON_IS_ANIMATED__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const { isAnimated, radius } = useSkeletonResponsiveValues<Element>({
		isAnimated: isAnimatedProp,
		radius: radiusProp
	});

	const colorClassName = useGetColor({
		color: color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'divider',
		classType: 'bg'
	});

	const radiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

	const easeClassName = useGetClass((classes) => classes.transitions.ease[__DEFAULT_EASING__]);
	const durationClassName = useGetClass((classes) => classes.transitions.duration[__DEFAULT_DURATION__]);

	return classNames(
		classes.layout.overflow.hidden,
		colorClassName,
		radiusClassName,
		easeClassName,
		durationClassName,
		{
			['animate-pulse']: isAnimated
		}
	);
};

export default useSkeletonClasses;
