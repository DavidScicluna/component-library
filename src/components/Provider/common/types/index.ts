import { ReactNode } from 'react';

import type { AnimationDelay, AnimationDuration, AnimationEasing } from '@common/types/animation';
import type { ColorMode, CommonThemeProps } from '@common/types/theme';

import type { IconCategory } from '@components/DataDisplay/Icon/common/types';

export type ProviderProps = Pick<CommonThemeProps, 'color'> & {
	children: ReactNode;
	colorMode?: ColorMode;
};

export type ProviderContext = CommonThemeProps;
export type AnimationContext = {
	delay?: AnimationDelay;
	duration?: AnimationDuration;
	easing?: AnimationEasing;
};
export type IconFontContext = Record<IconCategory, boolean>;
