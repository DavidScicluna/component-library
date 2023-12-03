import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
export type TabsAlign = 'start' | 'center' | 'end';
export type TabsOrientation = 'top' | 'bottom' | 'left' | 'right';
export type TabsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TabsOtherProps = ThemeAppAppearanceProps & {
    /**
     * The alignment of the tabs
     *
     * @default 'start'
     */
    align?: ResponsiveValue<TabsAlign>;
    /**
     * The index of the selected tab
     */
    index: ResponsiveValue<number>;
    /**
     * If true, the tabs will be disabled
     *
     * @default false
     */
    isDisabled?: ResponsiveValue<boolean>;
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
    orientation?: ResponsiveValue<TabsOrientation>;
    /**
     * Callback when the index changes.
     */
    onChange: (index: number) => void;
    /**
     * The size of the Tabs
     *
     * @default 'md'
     */
    size?: ResponsiveValue<TabsSize>;
    spacing?: ResponsiveValue<ThemeSpacing>;
};
export type TabsProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, TabsOtherProps>;
export type TabsRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export type TabsContext<Element extends ElementType = PolymorphicDefaultElement> = Pick<TabsProps<Element>, 'color' | 'colorMode' | 'align' | 'id' | 'index' | 'isDisabled' | 'isFitted' | 'onChange' | 'orientation' | 'size' | 'spacing'>;
export {};
//# sourceMappingURL=index.d.ts.map