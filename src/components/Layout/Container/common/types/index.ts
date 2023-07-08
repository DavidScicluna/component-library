import { ElementType } from 'react';

import { Breakpoint, ResponsiveValue } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type ContainerSize = Exclude<Breakpoint, 'xs'> | number;

export type ContainerProps<Element extends ElementType> = BoxProps<
	Element,
	{
		centerContent?: boolean;
		isFluid?: ResponsiveValue<boolean>;
		size?: ResponsiveValue<ContainerSize>;
	}
>;

export type ContainerRef<Element extends ElementType> = BoxRef<Element>;
