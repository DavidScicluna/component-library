import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
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
		alignItems: alignItemsProp = __DEFAULT_STACK_ALIGN_ITEMS__,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		justifyContent: justifyContentProp = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		wrap: wrapProp = __DEFAULT_STACK_WRAP__
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
