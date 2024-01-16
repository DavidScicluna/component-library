import type { ReactNode } from 'react';

import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type StackOtherProps = {
	alignItems?: AlignItemsClass;
	direction?: FlexDirectionClass;
	divider?: ReactNode;
	justifyContent?: JustifyContentClass;
	// shouldWrapChildren; TODO: Check if needed & Also check overlay component should have display-block
	spacing?: ThemeSpacing;
	wrap?: FlexWrapClass;
};
export type StackResponsiveValueProps = ResponsiveValueProps<
	StackOtherProps,
	'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap'
>;

export type StackProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	StackResponsiveValueProps
>;

export type StackRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
