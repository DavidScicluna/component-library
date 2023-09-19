import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';

import type { ProgressProps } from '../types';

type UseProgressClassesProps<Element extends ElementType> = Pick<
	ProgressProps<Element>,
	'color' | 'colorMode' | 'radius'
>;
type UseProgressClassesReturn = ClassName;

const useProgressClasses = <Element extends ElementType>(
	props: UseProgressClassesProps<Element>
): UseProgressClassesReturn => {
	const { colorMode: __DEFAULT_PROGRESS_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_PROGRESS_COLORMODE__,
		radius = __DEFAULT_RADIUS__
	} = props;

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'background',
		classType: 'bg'
	});

	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	return classNames(
		classes.layout.position.relative,
		classes.layout.overflow.hidden,
		backgroundClassName,
		radiusClassName
	);
};

export default useProgressClasses;
