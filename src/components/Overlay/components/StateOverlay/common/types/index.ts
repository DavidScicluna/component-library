import type { ReactNode } from 'react';

import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GlassOverlayProps } from '@components/Overlay';

export type StateOverlayState = 'success' | 'error' | 'empty' | 'loading' | 'default';

export type StateOverlayRenderType = (state: StateOverlayState) => ReactNode;

export type StateOverlayNonResponsiveValueProps = {
	renderSuccess?: StateOverlayRenderType;
	renderError?: StateOverlayRenderType;
	renderEmpty?: StateOverlayRenderType;
	renderSpinner?: StateOverlayRenderType;
	hasGlass?: boolean;
	isAlwaysVisible?: boolean;
	state: StateOverlayState;
};
export type StateOverlayResponsiveValueProps = ResponsiveValueProps<StateOverlayNonResponsiveValueProps>;

export type StateOverlayUniqueProps = ThemeAppAppearanceProps & {
	children: StateOverlayRenderType;
} & StateOverlayResponsiveValueProps &
	Pick<GlassOverlayProps<PolymorphicDefaultElement>, 'blur'>;

export type StateOverlayProps<Element extends PolymorphicElementType> = BoxProps<Element, StateOverlayUniqueProps>;

export type StateOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
