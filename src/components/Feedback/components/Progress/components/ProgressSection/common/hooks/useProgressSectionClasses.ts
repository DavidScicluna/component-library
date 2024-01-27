import classes from '@common/classes';
import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType, ThemeRadius } from '@common/types';

import { useProgressContext } from '@components/Feedback/components/Progress/common/hooks';

import type { ProgressSectionProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseProgressSectionClassesProps<Element extends PolymorphicElementType> = Pick<
	ProgressSectionProps<Element>,
	'color' | 'colorMode'
>;
type UseProgressSectionClassesReturn = ClassName;

const useProgressSectionClasses = <Element extends PolymorphicElementType>(
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
