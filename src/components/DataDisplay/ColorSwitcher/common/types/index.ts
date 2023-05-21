import { ReactNode } from 'react';

import { AppColors, CommonThemeProps } from '../../../../../common/types';

export type ColorSwitcherOnChangeProps = Pick<CommonThemeProps, 'color'>;

export type ColorSwitcherVariant = 'grid' | 'scroll';

export type ColorSwitcherProps = CommonThemeProps & {
	children: ReactNode;
	colors?: AppColors;
	onChange: (props: ColorSwitcherOnChangeProps) => void;
	variant?: ColorSwitcherVariant;
};

export type ColorSwitcherContext = Pick<ColorSwitcherProps, 'color' | 'colors' | 'colorMode' | 'onChange'>;
