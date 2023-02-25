import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

export type ButtonColor = Exclude<Color, 'transparent'>;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type CommonButtonProps = {
	children?: ReactNode;
	color?: ButtonColor;
	colorMode?: ColorMode;
	isFullWidth?: boolean;
	isRound?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};
