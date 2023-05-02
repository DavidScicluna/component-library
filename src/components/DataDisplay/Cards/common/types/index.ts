import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { BoxPseudo } from '../../../../../common/types/box';
import { Color, Space } from '../../../../../theme/types';
import { PushableOverlayProps } from '../../../../Overlay/PushableOverlay/common/types';

export type CardColor = Exclude<Color, 'transparent'>;

export type CardVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent';

type Omitted = BoxPseudo | 'as' | 'tabIndex' | 'borderRadius' | 'isPushable' | 'variant';

export type CommonCardProps = Omit<PushableOverlayProps, Omitted> & {
	children: ReactNode;
	color?: CardColor;
	colorMode?: ColorMode;
	isClickable?: boolean;
	isDisabled?: boolean;
	isDivisible?: boolean;
	isFixed?: boolean;
	spacing?: Space;
	variant?: CardVariant;
};
