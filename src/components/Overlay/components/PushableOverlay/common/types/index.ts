import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type PushableOverlayVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'transparent';

type PushableOverlayOtherProps = ThemeAppAppearanceProps & {
	isActive?: ResponsiveValue<boolean>;
	isDisabled?: ResponsiveValue<boolean>;
	isFixed?: ResponsiveValue<boolean>;
	isPushable?: ResponsiveValue<boolean>;
	radius?: ResponsiveValue<ThemeRadius>;
	variant?: ResponsiveValue<PushableOverlayVariant>;
};

export type PushableOverlayProps<Element extends ElementType> = BoxProps<Element, PushableOverlayOtherProps>;

export type PushableOverlayRef<Element extends ElementType> = BoxRef<Element>;