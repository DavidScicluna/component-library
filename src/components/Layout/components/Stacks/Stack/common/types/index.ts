import type { ReactNode } from 'react';

import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeSpacing
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type StackNonResponsiveValueProps = {
	alignItems?: AlignItemsClass;
	direction?: FlexDirectionClass;
	divider?: ReactNode;
	justifyContent?: JustifyContentClass;
	// shouldWrapChildren; TODO: Check if needed & Also check overlay component should have display-block
	spacing?: ThemeSpacing;
	wrap?: FlexWrapClass;
};
export type StackResponsiveValueProps = ResponsiveValueProps<StackNonResponsiveValueProps>;

export type StackUniqueProps = BoxOtherProps & StackResponsiveValueProps;

export type StackProps<Element extends PolymorphicElementType> = BoxProps<Element, StackUniqueProps>;

export type StackRef<Element extends PolymorphicElementType> = BoxRef<Element>;
