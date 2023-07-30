import type { ElementType } from 'react';

import classNames from 'classnames';

import { __DEFAULT_DURATION__, __DEFAULT_EASING__, __DEFAULT_RADIUS__ } from '@common/constants';
import { __DEFAULT_COLOR__ } from '@common/constants/props';
import { useAppTheme, useConst, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Duration, Ease, Radius } from '@common/types/theme';

import type { SkeletonProps } from '../types';

type UseGetSkeletonClassesProps<Element extends ElementType> = Pick<
	SkeletonProps<Element>,
	'color' | 'colorMode' | 'radius'
>;
type UseGetSkeletonClassesReturn = Record<'common' | 'skeleton', ClassName>;

const useGetSkeletonClasses = <Element extends ElementType>(
	props: UseGetSkeletonClassesProps<Element>
): UseGetSkeletonClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const { color = __DEFAULT_COLOR__, colorMode = __DEFAULT_ICON_COLORMODE__, radius = __DEFAULT_RADIUS__ } = props;

	const commonClasses = useConst<string>(() => classNames('w-full', 'h-full'));

	const colorClassName = useGetColor({
		color: color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'bg',
		hueType: 'divider'
	});

	const radiusClassName = useGetClass<Radius>(radius, ['borders', 'borderRadius']);

	const easeClassName = useGetClass<Ease>(__DEFAULT_EASING__, ['transitions', 'ease']);
	const durationClassName = useGetClass<Duration>(__DEFAULT_DURATION__, ['transitions', 'duration']);

	return {
		common: commonClasses,
		skeleton: classNames('overflow-hidden', colorClassName, radiusClassName, easeClassName, durationClassName)
	};
};

export default useGetSkeletonClasses;
