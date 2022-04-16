import { ColorMode } from '@chakra-ui/react';

import { CardProps, CardColor, Variant } from '../../types';

export type CardStyleProps = {
	color: CardColor;
	colorMode: ColorMode;
	isFullWidth: CardProps['isFullWidth'];
	isLight: CardProps['isLight'];
	isClickable: CardProps['isClickable'];
	isFixed: CardProps['isFixed'];
	variant: Variant;
};
