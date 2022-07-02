import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

export type IconButtonColor = Exclude<Color, 'transparent'>;

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonVariant = 'contained' | 'outlined' | 'icon';

export type CommonIconButtonProps = {
	children: ReactNode;
	color?: IconButtonColor;
	colorMode?: ColorMode;
	size?: IconButtonSize;
	variant?: IconButtonVariant;
};
