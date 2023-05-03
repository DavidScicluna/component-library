import { ColorMode } from '@chakra-ui/react';

import { BoxPseudo } from '../../../../../common/types/box';
import { Color, Space } from '../../../../../theme/types';
import { PushableOverlayProps } from '../../../../Overlay/PushableOverlay/common/types';

export type CollapsibleCardColor = Exclude<Color, 'transparent'>;

export type CollapsibleCardVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent';

type Omitted = BoxPseudo | 'as' | 'tabIndex' | 'borderRadius' | 'isPushable' | 'variant';

export type CommonCollapsibleCardProps = Omit<PushableOverlayProps, Omitted> & {
	color?: CollapsibleCardColor;
	colorMode?: ColorMode;
	isClickable?: boolean;
	isDisabled?: boolean;
	isDivisible?: boolean;
	isFixed?: boolean;
	spacing?: Space;
	variant?: CollapsibleCardVariant;
};
