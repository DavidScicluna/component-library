import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, PolymorphicElementType, ThemeSpacing } from '@common/types';

import { __DEFAULT_CENTER_SPACING__ } from '../constants';
import type { CenterProps } from '../types';

import useCenterResponsiveValues from './useCenterResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseCenterClassesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	CenterProps<Element>,
	'spacing'
>;
type UseCenterClassesReturn = ClassName;

const useCenterClasses = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseCenterClassesProps<Element>
): UseCenterClassesReturn => {
	const { spacing: spacingProp = __DEFAULT_CENTER_SPACING__ } = props;

	const { spacing } = useCenterResponsiveValues<Element>({ spacing: spacingProp });

	const spacingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'gap']);

	return classNames(
		classes.layout.display.flex,
		classes.flex.direction.row,
		classes.flex.wrap.nowrap,
		classes.flex.align_items.center,
		classes.flex.justify_content.center,
		spacingClassName
	);
};

export default useCenterClasses;
