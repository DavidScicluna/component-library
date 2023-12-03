import type { ElementType, ReactNode } from 'react';
import type { PolymorphicDefaultElement, ThemeAppAppearanceProps } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
import type { GlassOverlayProps } from '@components/Overlay';
export type StateOverlayState = 'success' | 'error' | 'empty' | 'loading' | 'default';
type StateOverlayOtherProps<Element extends ElementType = PolymorphicDefaultElement> = ThemeAppAppearanceProps & {
    children: (state: StateOverlayState) => ReactNode;
    renderSuccess?: (state: StateOverlayState) => ReactNode;
    renderError?: (state: StateOverlayState) => ReactNode;
    renderEmpty?: (state: StateOverlayState) => ReactNode;
    renderSpinner?: (state: StateOverlayState) => ReactNode;
    hasGlass?: boolean;
    isAlwaysVisible?: boolean;
    state: StateOverlayState;
} & Pick<GlassOverlayProps<Element>, 'blur'>;
export type StateOverlayProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<BoxProps<Element, StateOverlayOtherProps<Element>>, 'children'>;
export type StateOverlayRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map