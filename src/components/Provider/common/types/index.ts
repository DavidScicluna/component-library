import type { ReactNode } from 'react';

import type { AnimationDelay, AnimationDuration, AnimationEasing } from '@common/types/animation';
import type { ColorMode, CommonAppThemeProps } from '@common/types/theme';

import type { IconCategory } from '@components/DataDisplay';

export type ProviderProps = Pick<CommonAppThemeProps, 'color'> & {
	children: ReactNode;
	colorMode?: ColorMode;
};

export type ProviderContext = CommonAppThemeProps;
export type AnimationContext = {
	delay?: AnimationDelay;
	duration?: AnimationDuration;
	easing?: AnimationEasing;
};
export type IconFontContext = Record<IconCategory, boolean>;
