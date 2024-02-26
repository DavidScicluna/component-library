import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR, DEFAULT_DURATION, DEFAULT_EASING, DEFAULT_RADIUS } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { DEFAULT_SKELETON_IS_ANIMATED } from '../constants';
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
	const { colorMode: DEFAULT_ICON_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_ICON_COLORMODE,
		isAnimated: isAnimatedProp = DEFAULT_SKELETON_IS_ANIMATED,
		radius: radiusProp = DEFAULT_RADIUS
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

	const easeClassName = useGetClass((classes) => classes.transitions.ease[DEFAULT_EASING]);
	const durationClassName = useGetClass((classes) => classes.transitions.duration[DEFAULT_DURATION]);

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
