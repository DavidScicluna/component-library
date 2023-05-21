import { ReactNode } from 'react';

import { CommonThemeProps } from '../../../../../common/types';
import { Color } from '../../../../../theme/types';

export type IconButtonColor = Exclude<Color, 'transparent'>;

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'icon';

export type CommonIconButtonProps = Pick<CommonThemeProps, 'colorMode'> & {
	children: ReactNode;
	color?: IconButtonColor;
	isCompact?: boolean;
	isRound?: boolean;
	size?: IconButtonSize;
	variant?: IconButtonVariant;
};
