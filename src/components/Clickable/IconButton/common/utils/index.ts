import { ColorMode } from '@chakra-ui/react';

import { Color, ColorHues, Space } from '../../../../../theme/types';
import { Size, Variant } from '../../types';

type Amounts = {
	back: number;
	hover: number;
	active: number;
};

type Variants = {
	contained: number; // In Pixels
	outlined: number; // In Pixels
	icon: number; // In Pixels
};

type SizeStyle = {
	padding: Space; // In Space (Theme) Values
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	transform: Variants;
	offset: Variants;
};

export const handleSize = (size: Size): SizeStyle => {
	switch (size) {
		case 'xs':
			return {
				padding: 0.25,
				border: 1,
				spacing: 0.5,
				transform: { contained: 2, outlined: 2, icon: 0 },
				offset: { contained: 2, outlined: 2, icon: 0 }
			};
		case 'sm':
			return {
				padding: 0.5,
				border: 1,
				spacing: 1,
				transform: { contained: 2, outlined: 2, icon: 0 },
				offset: { contained: 2, outlined: 2, icon: 0 }
			};
		case 'lg':
			return {
				padding: 1.5,
				border: 2,
				spacing: 3,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
			};
		case 'xl':
			return {
				padding: 2,
				border: 2,
				spacing: 4,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
			};
		default:
			return {
				padding: 1,
				border: 2,
				spacing: 2,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
			};
	}
};

export const handleHue = (colorMode: ColorMode, color: Color): ColorHues => {
	if (colorMode === 'light') {
		return color === 'gray' ? 400 : color === 'white' ? 200 : color === 'black' ? 700 : 500;
	} else {
		return color === 'gray' ? 500 : color === 'white' ? 200 : color === 'black' ? 700 : 400;
	}
};

export const handleAmount = (variant: Variant): Amounts => {
	return {
		back: variant === 'contained' ? 0.1 : 0,
		hover: 0.05,
		active: 0.15
	};
};
