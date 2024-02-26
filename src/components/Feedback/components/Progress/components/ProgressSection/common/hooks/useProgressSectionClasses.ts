import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { useProgressContext } from '@components/Feedback/components/Progress/common/hooks';

import type { ProgressSectionProps } from '../types';

type UseProgressSectionClassesProps<Element extends PolymorphicElementType> = Pick<
	ProgressSectionProps<Element>,
	'color' | 'colorMode'
>;
type UseProgressSectionClassesReturn = ClassName;

const useProgressSectionClasses = <Element extends PolymorphicElementType>(
	props: UseProgressSectionClassesProps<Element>
): UseProgressSectionClassesReturn => {
	const {
		color: DEFAULT_PROGRESS_SECTION_COLOR,
		colorMode: DEFAULT_PROGRESS_SECTION_COLORMODE,
		radius,
		variant
	} = useProgressContext();

	const { color = DEFAULT_PROGRESS_SECTION_COLOR, colorMode = DEFAULT_PROGRESS_SECTION_COLORMODE } = props;

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'color',
		classType: 'bg'
	});

	const radiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

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
