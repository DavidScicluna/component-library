import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_DURATION__, __DEFAULT_EASING__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, ThemeDuration, ThemeEase, ThemeRadius } from '@common/types';

import { __DEFAULT_SKELETON_IS_ANIMATED__ } from '../constants';
import type { SkeletonProps } from '../types';

type UseSkeletonClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	SkeletonProps<Element>,
	'color' | 'colorMode' | 'isAnimated' | 'radius'
>;
type UseSkeletonClassesReturn = ClassName;

const useSkeletonClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseSkeletonClassesProps<Element>
): UseSkeletonClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ICON_COLORMODE__,
		isAnimated = __DEFAULT_SKELETON_IS_ANIMATED__,
		radius = __DEFAULT_RADIUS__
	} = props;

	const colorClassName = useGetColor({
		color: color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'divider',
		classType: 'bg'
	});

	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const easeClassName = useGetClass<ThemeEase>(__DEFAULT_EASING__, ['transitions', 'ease']);
	const durationClassName = useGetClass<ThemeDuration>(__DEFAULT_DURATION__, ['transitions', 'duration']);

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
