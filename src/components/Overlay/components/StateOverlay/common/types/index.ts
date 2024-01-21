import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GlassOverlayProps } from '@components/Overlay';

export type StateOverlayState = 'success' | 'error' | 'empty' | 'loading' | 'default';

export type StateOverlayRenderType = (state: StateOverlayState) => ReactNode;

type StateOverlayOtherProps<Element extends PolymorphicElementType> = ThemeAppAppearanceProps & {
	children: StateOverlayRenderType;
	renderSuccess?: ResponsiveValue<StateOverlayRenderType>;
	renderError?: ResponsiveValue<StateOverlayRenderType>;
	renderEmpty?: ResponsiveValue<StateOverlayRenderType>;
	renderSpinner?: ResponsiveValue<StateOverlayRenderType>;
	hasGlass?: ResponsiveValue<boolean>;
	isAlwaysVisible?: ResponsiveValue<boolean>;
	state: ResponsiveValue<StateOverlayState>;
} & Pick<GlassOverlayProps<Element>, 'blur'>;

export type StateOverlayProps<Element extends PolymorphicElementType> = BoxProps<
	Element,
	StateOverlayOtherProps<Element>
>;

export type StateOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
