import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
export type DummyTabsAlign = 'start' | 'center' | 'end';
export type DummyTabsOrientation = 'top' | 'bottom' | 'left' | 'right';
export type DummyTabsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type DummyTabsOtherProps = ThemeAppAppearanceProps & {
    /**
     * The alignment of the tabs
     *
     * @default 'start'
     */
    align?: ResponsiveValue<DummyTabsAlign>;
    /**
     * The index of the selected tab
     */
    index: ResponsiveValue<number>;
    /**
     *  If `true` the tabs will not have the pulse animation
     *
     * @default true
     */
    isAnimated?: ResponsiveValue<boolean>;
    /**
     * If true, tabs will stretch to width of the parent element.
     *
     * @default false
     */
    isFitted?: ResponsiveValue<boolean>;
    /**
     * The orientation of the tab list.
     *
     * @default 'horizontal'
     */
    orientation?: ResponsiveValue<DummyTabsOrientation>;
    /**
     * The size of the tabs
     *
     * @default 'md'
     */
    size?: ResponsiveValue<DummyTabsSize>;
    spacing?: ResponsiveValue<ThemeSpacing>;
};
export type DummyTabsProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, DummyTabsOtherProps>;
export type DummyTabsRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export type DummyTabsContext<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyTabsProps<Element>, 'color' | 'colorMode' | 'align' | 'id' | 'index' | 'isAnimated' | 'isFitted' | 'orientation' | 'size' | 'spacing'>;
export {};
//# sourceMappingURL=index.d.ts.map