import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ResponsiveValue, ThemeBreakpoint } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
export type ContainerBreakpoint = Exclude<ThemeBreakpoint, 'xs'>;
export type ContainerBreakpoints = Array<ContainerBreakpoint>;
type ContainerOtherProps = {
    breakpoint?: ResponsiveValue<ContainerBreakpoint>;
    isContentCentered?: ResponsiveValue<boolean>;
    isFluid?: ResponsiveValue<boolean>;
};
export type ContainerProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, ContainerOtherProps>;
export type ContainerRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map