import { ElementType } from 'react';

import type { ResponsiveValue } from '../../../../../common/types';
import type { Breakpoint } from '../../../../../common/types/theme';
import type { BoxProps, BoxRef } from '../../../Box/common/types';

export type ContainerSize = Exclude<Breakpoint, 'xs'>;
export type ContainerSizes = ContainerSize[];

export type ContainerProps<Element extends ElementType> = BoxProps<
	Element,
	{
		isContentCentered?: boolean;
		isFluid?: ResponsiveValue<boolean>;
		size?: ResponsiveValue<ContainerSize>;
	}
>;

export type ContainerRef<Element extends ElementType> = BoxRef<Element>;
