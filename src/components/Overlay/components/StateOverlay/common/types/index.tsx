import type { ElementType, ReactNode } from 'react';

import type { ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GlassOverlayProps } from '@components/Overlay';

export type StateOverlayState = 'success' | 'error' | 'empty' | 'loading' | 'default';

type StateOverlayOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
	renderSuccess?: (state: StateOverlayState) => ReactNode;
	renderError?: (state: StateOverlayState) => ReactNode;
	renderEmpty?: (state: StateOverlayState) => ReactNode;
	renderSpinner?: (state: StateOverlayState) => ReactNode;
	hasGlass?: boolean;
	isAlwaysVisible?: boolean;
	state: StateOverlayState;
} & Pick<GlassOverlayProps<Element>, 'blur'>;

export type StateOverlayProps<Element extends ElementType> = Omit<
	BoxProps<Element, StateOverlayOtherProps<Element>>,
	'children'
> & {
	children: (state: StateOverlayState) => ReactNode;
};

export type StateOverlayRef<Element extends ElementType> = BoxRef<Element>;
