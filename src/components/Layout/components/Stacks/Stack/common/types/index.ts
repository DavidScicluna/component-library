import type { ElementType, ReactNode } from 'react';

import type { ResponsiveValue } from '@common/types';
import type { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '@common/types/classes';
import type { Space } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

interface StackOtherProps {
	alignItems?: ResponsiveValue<AlignItems>;
	direction?: ResponsiveValue<FlexDirection>;
	divider?: ReactNode;
	justifyContent?: ResponsiveValue<JustifyContent>;
	// shouldWrapChildren; TODO: Check if needed & Also check overlay component should have display-block
	spacing?: ResponsiveValue<Space>;
	wrap?: ResponsiveValue<FlexWrap>;
}

export type StackProps<Element extends ElementType> = BoxProps<Element, StackOtherProps>;

export type StackRef<Element extends ElementType> = BoxRef<Element>;
