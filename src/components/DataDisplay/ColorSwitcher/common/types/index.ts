import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { AppColor, AppColors } from '../../../../../common/types';

export type ColorSwitcherOnChangeProps = { color: AppColor };

export type ColorSwitcherVariant = 'grid' | 'scroll';

export type ColorSwitcherProps = {
	children: ReactNode;
	color: AppColor;
	colors?: AppColors;
	colorMode?: ColorMode;
	onChange: (props: ColorSwitcherOnChangeProps) => void;
	variant?: ColorSwitcherVariant;
};

export type ColorSwitcherContext = Pick<ColorSwitcherProps, 'color' | 'colors' | 'colorMode' | 'onChange'>;
