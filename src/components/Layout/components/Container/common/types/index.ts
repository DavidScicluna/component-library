import type { PolymorphicElementType, ResponsiveValueProps, ThemeBreakpoint } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type ContainerBreakpoint = Exclude<ThemeBreakpoint, 'xs'>;

export type ContainerNonResponsiveValueProps = {
	breakpoint?: ContainerBreakpoint;
	isContentCentered?: boolean;
	isFluid?: boolean;
};
export type ContainerResponsiveValueProps = ResponsiveValueProps<ContainerNonResponsiveValueProps>;

export type ContainerUniqueProps = BoxOtherProps & ContainerResponsiveValueProps;

export type ContainerProps<Element extends PolymorphicElementType> = BoxProps<Element, ContainerUniqueProps>;

export type ContainerRef<Element extends PolymorphicElementType> = BoxRef<Element>;
