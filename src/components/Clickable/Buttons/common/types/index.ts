import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../../common/types';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'text';

export type ButtonRenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
} & Pick<CommonButtonProps, 'color' | 'colorMode'>;

export type CommonButtonProps = {
	children?: ReactNode;
	color?: AppColor;
	colorMode?: ColorMode;
	isCompact?: boolean;
	isFullWidth?: boolean;
	isRound?: boolean;
	renderLeft?: (props: ButtonRenderProps) => ReactNode;
	renderRight?: (props: ButtonRenderProps) => ReactNode;
	size?: ButtonSize;
	variant?: ButtonVariant;
};
