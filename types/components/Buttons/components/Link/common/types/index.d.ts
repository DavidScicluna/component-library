import type { ElementType } from 'react';
import type { PickFrom, PolymorphicMouseEvent, ThemeAppAppearanceProps } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
export type LinkMouseEvent<Element extends LinkElement = LinkDefaultElement> = PolymorphicMouseEvent<Element>;
export type LinkDefaultElement = 'a';
export type LinkElement = PickFrom<ElementType, 'a'>;
type LinkOtherProps = ThemeAppAppearanceProps & {
    /**
     * If true, the link will be disabled
     *
     * @default false
     */
    isDisabled?: boolean;
    /**
     * If true, the link will have text decoration styling
     *
     * @default true
     */
    isUnderline?: boolean;
    /**
     * If true, the link will be unstyled
     *
     * @default false
     */
    isUnstyled?: boolean;
};
export type LinkProps<Element extends LinkElement = LinkDefaultElement> = BoxProps<Element, LinkOtherProps>;
export type LinkRef<Element extends LinkElement = LinkDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map