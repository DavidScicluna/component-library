import { ElementType, ReactNode } from 'react';

import { ResponsiveValue, Space } from '../../../../../../common/types';
import { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '../../../../../../common/types/flexbox&grid';
import { BoxProps, BoxRef } from '../../../../Box/common/types';

export type StackProps<Element extends ElementType> = BoxProps<
	Element,
	{
		alignItems?: ResponsiveValue<AlignItems>;
		direction?: ResponsiveValue<FlexDirection>;
		divider?: ReactNode;
		justifyContent?: ResponsiveValue<JustifyContent>;
		// shouldWrapChildren; TODO: Check if needed & Also check overlay component should have display-block
		spacing?: ResponsiveValue<Space>;
		wrap?: ResponsiveValue<FlexWrap>;
	}
>;

export type StackRef<Element extends ElementType> = BoxRef<Element>;
