import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeBreakpoint
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type ContainerBreakpoint = Exclude<ThemeBreakpoint, 'xs'>;

export type ContainerOtherProps = {
	breakpoint?: ContainerBreakpoint;
	isContentCentered?: boolean;
	isFluid?: boolean;
};
export type ContainerResponsiveValueProps = ResponsiveValueProps<
	ContainerOtherProps,
	'breakpoint' | 'isContentCentered' | 'isFluid'
>;

export type ContainerProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	ContainerResponsiveValueProps
>;

export type ContainerRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
