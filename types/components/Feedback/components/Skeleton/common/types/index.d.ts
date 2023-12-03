import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
type SkeletonOtherProps = ThemeAppAppearanceProps & {
    /**
     *  If `true` the skeleton will not have the pulse animation
     *
     * @default true
     */
    isAnimated?: boolean;
    /**
     *  If `true` the skeleton will be animated out and the children will be animated in
     *
     * @default false
     */
    isLoaded?: boolean;
    /**
     *  The radius of the container
     *
     * @default 'base'
     */
    radius?: ResponsiveValue<ThemeRadius>;
};
export type SkeletonProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, SkeletonOtherProps>;
export type SkeletonRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map