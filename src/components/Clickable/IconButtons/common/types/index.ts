import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../../common/types';

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'icon';

export type CommonIconButtonProps = {
	children: ReactNode;
	color?: AppColor;
	colorMode?: ColorMode;
	isCompact?: boolean;
	isRound?: boolean;
	size?: IconButtonSize;
	variant?: IconButtonVariant;
};
