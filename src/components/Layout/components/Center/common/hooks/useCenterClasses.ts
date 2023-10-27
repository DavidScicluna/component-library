import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, ThemeSpacing } from '@common/types';

import type { CenterProps } from '../types';

type UseCenterClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	CenterProps<Element>,
	'spacing'
>;
type UseCenterClassesReturn = ClassName;

const useCenterClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseCenterClassesProps<Element>
): UseCenterClassesReturn => {
	const { spacing = __DEFAULT_SPACING__ } = props;

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
