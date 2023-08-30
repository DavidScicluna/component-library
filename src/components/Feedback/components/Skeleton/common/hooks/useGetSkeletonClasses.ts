import type { ElementType } from 'react';

import classNames from 'classnames';

import { __DEFAULT_COLOR__, __DEFAULT_DURATION__, __DEFAULT_EASING__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeDuration, ThemeEase, ThemeRadius } from '@common/types';

import type { SkeletonProps } from '../types';

type UseGetSkeletonClassesProps<Element extends ElementType> = Pick<
	SkeletonProps<Element>,
	'color' | 'colorMode' | 'radius'
>;
type UseGetSkeletonClassesReturn = ClassName;

const useGetSkeletonClasses = <Element extends ElementType>(
	props: UseGetSkeletonClassesProps<Element>
): UseGetSkeletonClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const { color = __DEFAULT_COLOR__, colorMode = __DEFAULT_ICON_COLORMODE__, radius = __DEFAULT_RADIUS__ } = props;

	const colorClassName = useGetColor({
		color: color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'bg',
		hueType: 'divider'
	});

	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const easeClassName = useGetClass<ThemeEase>(__DEFAULT_EASING__, ['transitions', 'ease']);
	const durationClassName = useGetClass<ThemeDuration>(__DEFAULT_DURATION__, ['transitions', 'duration']);

	return classNames('overflow-hidden', colorClassName, radiusClassName, easeClassName, durationClassName);
};

export default useGetSkeletonClasses;
