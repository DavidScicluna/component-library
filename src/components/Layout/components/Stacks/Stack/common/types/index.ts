import type { ElementType, ReactNode } from 'react';

import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	PolymorphicDefaultElement,
	ResponsiveValue,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type StackOtherProps = {
	alignItems?: ResponsiveValue<AlignItemsClass>;
	direction?: ResponsiveValue<FlexDirectionClass>;
	divider?: ReactNode;
	justifyContent?: ResponsiveValue<JustifyContentClass>;
	// shouldWrapChildren; TODO: Check if needed & Also check overlay component should have display-block
	spacing?: ResponsiveValue<ThemeSpacing>;
	wrap?: ResponsiveValue<FlexWrapClass>;
};

export type StackProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element> & StackOtherProps;

export type StackRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
