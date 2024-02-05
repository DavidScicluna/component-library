import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type {
	AlignItemsClass,
	ClassName,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	PolymorphicElementType,
	ThemeSpacing
} from '@common/types';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from '../constants';
import type { StackProps } from '../types';

import useStackResponsiveValues from './useStackResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

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
