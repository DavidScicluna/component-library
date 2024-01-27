import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';

import type { ProgressElement, ProgressProps } from '../types';

import useProgressResponsiveValues from './useProgressResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseProgressClassesProps<Element extends ProgressElement> = Pick<
	ProgressProps<Element>,
	'color' | 'colorMode' | 'radius'
>;
type UseProgressClassesReturn = ClassName;

const useProgressClasses = <Element extends ProgressElement>(
	props: UseProgressClassesProps<Element>
): UseProgressClassesReturn => {
	const { colorMode: __DEFAULT_PROGRESS_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_PROGRESS_COLORMODE__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const { radius } = useProgressResponsiveValues<Element>({ radius: radiusProp });

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'divider',
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
