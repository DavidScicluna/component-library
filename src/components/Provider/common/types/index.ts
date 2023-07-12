import { ReactNode } from 'react';

import { Transition } from 'framer-motion';

import type { ColorMode, CommonThemeProps } from '../../../../common/types/theme';
import type { IconCategory } from '../../../DataDisplay/Icon/common/types';

export type ProviderProps = Pick<CommonThemeProps, 'color'> & {
	children: ReactNode;
	colorMode?: ColorMode;
};

export type ProviderContext = CommonThemeProps
export type TransitionsContext = { config?: Transition; delay?: number; duration?: number };
export type IconFontContext = Record<IconCategory, boolean>;
