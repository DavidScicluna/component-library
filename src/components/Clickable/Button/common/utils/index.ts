import { ColorMode } from '@chakra-ui/react';

import { Color, ColorHues, Space } from '../../../../../theme/types';
import { Size, Variant } from '../../types';

type Amounts = {
	back: number;
	hover: number;
	active: number;
};

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type Variants = {
	contained: number; // In Pixels
	outlined: number; // In Pixels
	text: number; // In Pixels
};

type SizeStyle = {
	padding: Padding;
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	transform: Variants;
	offset: Variants;
};

export const handleSize = (size: Size): SizeStyle => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 0.5, y: 0.25 },
				border: 1,
				spacing: 0.5,
				transform: { contained: 2, outlined: 2, text: 0 },
				offset: { contained: 2, outlined: 2, text: 0 }
			};
		case 'sm':
			return {
				padding: { x: 1, y: 0.5 },
				border: 1,
				spacing: 1,
				transform: { contained: 2, outlined: 2, text: 0 },
				offset: { contained: 2, outlined: 2, text: 0 }
			};
		case 'lg':
			return {
				padding: { x: 3, y: 1.5 },
				border: 2,
				spacing: 3,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
			};
		case 'xl':
			return {
				padding: { x: 4, y: 2 },
				border: 2,
				spacing: 4,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
			};
		default:
			return {
				padding: { x: 2, y: 1 },
				border: 2,
				spacing: 2,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
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

export const handleIconFontSize = (size: Size): string => {
	switch (size) {
		case 'xs':
			return '15px'; // Height of theme xs font-size
		case 'sm':
			return '17px'; // Height of theme sm font-size
		case 'lg':
			return '21px'; // Height of theme lg font-size
		case 'xl':
			return '23px'; // Height of theme xl font-size
		default:
			return '18px'; // Height of theme md font-size
	}
};
