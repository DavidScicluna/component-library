import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_SPACING } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_STACK_ALIGN_ITEMS,
	DEFAULT_STACK_DIRECTION,
	DEFAULT_STACK_JUSTIFY_CONTENT,
	DEFAULT_STACK_WRAP
} from '../constants';
import type { StackProps } from '../types';

import useStackResponsiveValues from './useStackResponsiveValues';

type UseStackClassesProps<Element extends PolymorphicElementType> = Pick<
	StackProps<Element>,
	'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap'
>;
type UseStackClassesReturn = ClassName;

const useStackClasses = <Element extends PolymorphicElementType>(
	props: UseStackClassesProps<Element>
): UseStackClassesReturn => {
	const {
		alignItems: alignItemsProp = DEFAULT_STACK_ALIGN_ITEMS,
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		justifyContent: justifyContentProp = DEFAULT_STACK_JUSTIFY_CONTENT,
		spacing: spacingProp = DEFAULT_SPACING,
		wrap: wrapProp = DEFAULT_STACK_WRAP
	} = props;

	const { alignItems, direction, justifyContent, spacing, wrap } = useStackResponsiveValues({
		alignItems: alignItemsProp,
		direction: directionProp,
		justifyContent: justifyContentProp,
		spacing: spacingProp,
		wrap: wrapProp
	});

	const alignItemsClassName = useGetClass((classes) => classes.flex.align_items[alignItems]);
	const directionClassName = useGetClass((classes) => classes.flex.direction[direction]);
	const justifyContentClassName = useGetClass((classes) => classes.flex.justify_content[justifyContent]);
	const spacingClassName = useGetClass((classes) => classes.spacing.gap[spacing]);
	const wrapClassName = useGetClass((classes) => classes.flex.wrap[wrap]);

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
