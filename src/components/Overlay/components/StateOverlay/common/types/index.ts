import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GlassOverlayProps } from '@components/Overlay';

export type StateOverlayState = 'success' | 'error' | 'empty' | 'loading' | 'default';

type StateOverlayOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	ThemeAppAppearanceProps & {
		children: (state: StateOverlayState) => ReactNode;
		renderSuccess?: (state: StateOverlayState) => ReactNode;
		renderError?: (state: StateOverlayState) => ReactNode;
		renderEmpty?: (state: StateOverlayState) => ReactNode;
		renderSpinner?: (state: StateOverlayState) => ReactNode;
		hasGlass?: boolean;
		isAlwaysVisible?: boolean;
		state: StateOverlayState;
	} & Pick<GlassOverlayProps<Element>, 'blur'>;

export type StateOverlayProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, StateOverlayOtherProps<Element>>,
	'children'
>;

export type StateOverlayRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
