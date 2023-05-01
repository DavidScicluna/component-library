import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

export type ButtonColor = Exclude<Color, 'transparent'>;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'text';

export type ButtonRenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
} & Pick<CommonButtonProps, 'color' | 'colorMode'>;

export type CommonButtonProps = {
	children?: ReactNode;
	color?: ButtonColor;
	colorMode?: ColorMode;
	isCompact?: boolean;
	isFullWidth?: boolean;
	isRound?: boolean;
	renderLeft?: (props: ButtonRenderProps) => ReactNode;
	renderRight?: (props: ButtonRenderProps) => ReactNode;
	size?: ButtonSize;
	variant?: ButtonVariant;
};
