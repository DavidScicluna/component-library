import type { ElementType, ReactNode } from 'react';

import type { ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';
import type { GlassOverlayProps } from '@components/Overlay/components/GlassOverlay';

type LoadingOverlayOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
	renderSpinner: () => ReactNode;
	isLoading: boolean;
	hasGlass?: boolean;
	hasBackdrop?: boolean;
} & Pick<GlassOverlayProps<Element>, 'blur'>;

export type LoadingOverlayProps<Element extends ElementType> = BoxProps<Element, LoadingOverlayOtherProps<Element>>;

export type LoadingOverlayRef<Element extends ElementType> = BoxRef<Element>;
