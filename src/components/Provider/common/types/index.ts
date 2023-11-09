import type { ReactNode } from 'react';

import type {
	AnimationDelay,
	AnimationDuration,
	AnimationEasing,
	ThemeAppAppearanceProps,
	ThemeAppColor,
	ThemeColorMode
} from '@common/types';

import type { IconCategory } from '@components/DataDisplay';

export type ProviderProps = {
	children: ReactNode;
	color?: ThemeAppColor;
	colorMode?: ThemeColorMode;
};

export type ProviderContext = ThemeAppAppearanceProps;
export type AnimationContext = {
	delay?: AnimationDelay;
	duration?: AnimationDuration;
	easing?: AnimationEasing;
};
export type IconFontContext = Record<IconCategory, boolean>;
