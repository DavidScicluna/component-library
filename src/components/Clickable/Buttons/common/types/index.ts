import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../../common/types';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'text';

export type CommonButtonProps = {
	children?: ReactNode;
	color?: AppColor;
	colorMode?: ColorMode;
	isCompact?: boolean;
	isFullWidth?: boolean;
	isRound?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};
