import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';

import { useProgressContext } from '@components/Feedback/components/Progress';

import type { ProgressSectionProps } from '../types';

type UseProgressSectionClassesProps<Element extends ElementType> = Pick<
	ProgressSectionProps<Element>,
	'color' | 'colorMode'
>;
type UseProgressSectionClassesReturn = ClassName;

const useProgressSectionClasses = <Element extends ElementType>(
	props: UseProgressSectionClassesProps<Element>
): UseProgressSectionClassesReturn => {
	const {
		color: __DEFAULT_PROGRESS_SECTION_COLOR__,
		colorMode: __DEFAULT_PROGRESS_SECTION_COLORMODE__,
		radius
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
		classes.layout.top[0],
		classes.layout.bottom[0],
		backgroundClassName,
		radiusClassName
	);
};

export default useProgressSectionClasses;
