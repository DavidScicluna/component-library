import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';

import { hooks as feedback_hooks } from '@components/Feedback';

import type { ProgressSectionProps } from '../types';

type UseProgressSectionClassesProps<Element extends ElementType> = Pick<
	ProgressSectionProps<Element>,
	'color' | 'colorMode'
>;
type UseProgressSectionClassesReturn = ClassName;

const { useProgressContext } = feedback_hooks;

const useProgressSectionClasses = <Element extends ElementType>(
	props: UseProgressSectionClassesProps<Element>
): UseProgressSectionClassesReturn => {
	const {
		color: __DEFAULT_PROGRESS_SECTION_COLOR__,
		colorMode: __DEFAULT_PROGRESS_SECTION_COLORMODE__,
		radius,
		variant
	} = useProgressContext();

	const { color = __DEFAULT_PROGRESS_SECTION_COLOR__, colorMode = __DEFAULT_PROGRESS_SECTION_COLORMODE__ } = props;

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'color',
		classType: 'bg'
	});

	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	return classNames(
		classes.layout.position.absolute,
		classes.layout[variant === 'horizontal' ? 'top' : 'left'][0],
		classes.layout[variant === 'horizontal' ? 'bottom' : 'right'][0],
		backgroundClassName,
		radiusClassName,
		{ [classes.layout.bottom[0]]: variant === 'vertical' }
	);
};

export default useProgressSectionClasses;
