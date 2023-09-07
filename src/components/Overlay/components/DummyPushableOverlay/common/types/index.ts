import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type DummyPushableOverlayVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'transparent';

// TODO: Go over and add ResponsiveValue to all props except of function props
type DummyPushableOverlayOtherProps = ThemeAppAppearanceProps & {
	radius?: ResponsiveValue<ThemeRadius>;
	variant?: ResponsiveValue<DummyPushableOverlayVariant>;
};

export type DummyPushableOverlayProps<Element extends ElementType> = BoxProps<Element, DummyPushableOverlayOtherProps>;

export type DummyPushableOverlayRef<Element extends ElementType> = BoxRef<Element>;
