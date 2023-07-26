import { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';
import type { Breakpoint } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type ContainerBreakpoint = Exclude<Breakpoint, 'xs'>;
export type ContainerBreakpoints = ContainerBreakpoint[];

type ContainerOtherProps = {
	breakpoint?: ResponsiveValue<ContainerBreakpoint>;
	isContentCentered?: ResponsiveValue<boolean>;
	isFluid?: ResponsiveValue<boolean>;
};

export type ContainerProps<Element extends ElementType> = BoxProps<Element, ContainerOtherProps>;

export type ContainerRef<Element extends ElementType> = BoxRef<Element>;
