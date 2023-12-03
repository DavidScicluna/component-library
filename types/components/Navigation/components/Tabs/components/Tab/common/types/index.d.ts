import type { ElementType, ReactNode } from 'react';
import type { PickFrom, PolymorphicMouseEvent, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';
import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
export type TabMouseEvent<Element extends TabElement = TabDefaultElement> = PolymorphicMouseEvent<Element>;
export type TabDefaultElement = 'button';
export type TabElement = PickFrom<ElementType, 'button'>;
export type TabRenderProps<Element extends TabElement = TabDefaultElement> = Pick<TabOtherProps<Element>, 'color' | 'colorMode'> & {
    w?: number;
    h?: number;
};
type TabOtherProps<Element extends TabElement = TabDefaultElement> = ThemeAppAppearanceProps & {
    renderTop?: (props: TabRenderProps<Element>) => ReactNode;
    renderBottom?: (props: TabRenderProps<Element>) => ReactNode;
    renderLeft?: (props: TabRenderProps<Element>) => ReactNode;
    renderRight?: (props: TabRenderProps<Element>) => ReactNode;
    /**
     * The index of the tab
     */
    index: number;
    /**
     * If `true`, the tab will have the active styling
     *
     * @default false
     */
    isActive?: ResponsiveValue<boolean>;
    /**
     * If true, the tab will be styled in a more compressed state
     *
     * @default false
     */
    isCompact?: ResponsiveValue<boolean>;
    /**
     * If `true`, the tab will have the disabled styling
     *
     * @default false
     */
    isDisabled?: ResponsiveValue<boolean>;
    /**
     * If true, the tab text will be in uppercase else it will be capitalized
     *
     * @default true
     */
    isUppercase?: ResponsiveValue<boolean>;
    spacing?: ResponsiveValue<ThemeSpacing>;
};
export type TabProps<Element extends TabElement = TabDefaultElement> = Omit<BoxProps<Element, TabOtherProps<Element>>, keyof BoxOtherProps>;
export type TabRef<Element extends TabElement = TabDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map