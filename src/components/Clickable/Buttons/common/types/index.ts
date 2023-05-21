import { ReactNode } from 'react';

import { CommonThemeProps } from '../../../../../common/types';
import { Color } from '../../../../../theme/types';

export type ButtonColor = Exclude<Color, 'transparent'>;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'text';

export type ButtonRenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
} & Pick<CommonButtonProps, 'color' | 'colorMode'>;

export type CommonButtonProps = Pick<CommonThemeProps, 'colorMode'> & {
	children?: ReactNode;
	color?: ButtonColor;
	isCompact?: boolean;
	isFullWidth?: boolean;
	isRound?: boolean;
	renderLeft?: (props: ButtonRenderProps) => ReactNode;
	renderRight?: (props: ButtonRenderProps) => ReactNode;
	size?: ButtonSize;
	variant?: ButtonVariant;
};
