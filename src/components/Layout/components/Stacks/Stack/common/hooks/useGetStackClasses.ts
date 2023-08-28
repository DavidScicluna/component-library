import type { ElementType } from 'react';

import classNames from 'classnames';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type {
	AlignItemsClass,
	ClassName,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	ThemeSpacing
} from '@common/types';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from '../constants';
import type { StackProps } from '../types';

type UseGetStackClassesProps<Element extends ElementType> = Pick<
	StackProps<Element>,
	'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap'
>;
type UseGetStackClassesReturn = ClassName;

const useGetStackClasses = <Element extends ElementType>(
	props: UseGetStackClassesProps<Element>
): UseGetStackClassesReturn => {
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
	const wrapClassName = useGetClass<FlexWrapClass>(wrap, ['flex', 'wrap']);

	const spacingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'gap']);

	return classNames(
		'flex',
		directionClassName,
		wrapClassName,
		alignItemsClassName,
		justifyContentClassName,
		spacingClassName
	);
};

export default useGetStackClasses;
