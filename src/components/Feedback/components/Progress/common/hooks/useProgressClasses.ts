import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR, DEFAULT_RADIUS } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';

import type { ProgressElement, ProgressProps } from '../types';

import useProgressResponsiveValues from './useProgressResponsiveValues';

type UseProgressClassesProps<Element extends ProgressElement> = Pick<
	ProgressProps<Element>,
	'color' | 'colorMode' | 'radius'
>;
type UseProgressClassesReturn = ClassName;

const useProgressClasses = <Element extends ProgressElement>(
	props: UseProgressClassesProps<Element>
): UseProgressClassesReturn => {
	const { colorMode: DEFAULT_PROGRESS_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_PROGRESS_COLORMODE,
		radius: radiusProp = DEFAULT_RADIUS
	} = props;

	const { radius } = useProgressResponsiveValues<Element>({ radius: radiusProp });

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'divider',
		classType: 'bg'
	});

	const radiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

	return classNames(
		classes.layout.position.relative,
		classes.layout.overflow.hidden,
		backgroundClassName,
		radiusClassName
	);
};

export default useProgressClasses;
