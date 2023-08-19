import type { ElementType, ReactNode } from 'react';

import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';
import type { GlassProps } from '@components/Overlay/components/Glass/common/types';

export type StateOverlayState = 'success' | 'error' | 'empty' | 'loading' | 'default';

type StateOverlayOtherProps<Element extends ElementType> = CommonAppThemeProps & {
	renderSuccess?: (state: StateOverlayState) => ReactNode;
	renderError?: (state: StateOverlayState) => ReactNode;
	renderEmpty?: (state: StateOverlayState) => ReactNode;
	renderSpinner?: (state: StateOverlayState) => ReactNode;
	hasGlass?: boolean;
	isAlwaysVisible?: boolean;
	state: StateOverlayState;
} & Pick<GlassProps<Element>, 'blur'>;

export type StateOverlayProps<Element extends ElementType> = Omit<
	BoxProps<Element, StateOverlayOtherProps<Element>>,
	'children'
> & {
	children: (state: StateOverlayState) => ReactNode;
};

export type StateOverlayRef<Element extends ElementType> = BoxRef<Element>;
