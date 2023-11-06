import type { ElementType } from 'react';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type {
	AlignItemsClass,
	ClassName,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	PolymorphicDefaultElement,
	ThemeSpacing
} from '@common/types';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from '../constants';
import type { StackProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseStackClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	StackProps<Element>,
	'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap'
>;
type UseStackClassesReturn = ClassName;

const useStackClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseStackClassesProps<Element>
): UseStackClassesReturn => {
	const {
		alignItems = __DEFAULT_STACK_ALIGN_ITEMS__,
		direction = __DEFAULT_STACK_DIRECTION__,
		justifyContent = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing = __DEFAULT_SPACING__,
		wrap = __DEFAULT_STACK_WRAP__
	} = props;

	const alignItemsClassName = useGetClass<AlignItemsClass>(alignItems, ['flex', 'align_items']);
	const directionClassName = useGetClass<FlexDirectionClass>(direction, ['flex', 'direction']);
	const justifyContentClassName = useGetClass<JustifyContentClass>(justifyContent, ['flex', 'justify_content']);
	const spacingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'gap']);
	const wrapClassName = useGetClass<FlexWrapClass>(wrap, ['flex', 'wrap']);

	return classNames(
		classes.layout.display.flex,
		directionClassName,
		wrapClassName,
		alignItemsClassName,
		justifyContentClassName,
		spacingClassName
	);
};

export default useStackClasses;
