import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';

import type { ProgressProps } from '../types';

import useProgressResponsiveValues from './useProgressResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseProgressClassesProps = Pick<ProgressProps, 'color' | 'colorMode' | 'radius'>;
type UseProgressClassesReturn = ClassName;

const useProgressClasses = (props: UseProgressClassesProps): UseProgressClassesReturn => {
	const { colorMode: __DEFAULT_PROGRESS_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_PROGRESS_COLORMODE__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const { radius } = useProgressResponsiveValues({ radius: radiusProp });

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
