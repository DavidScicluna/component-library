import { ColorMode } from '@chakra-ui/react';

import { Color, ColorHues } from '../../../../theme/types';
import { Variant } from '../../types';

type Amounts = {
	back: number;
	hover: number;
	active: number;
};

type SizeStyle = {
	border: number; // In Pixels
	transform: number;
	offset: number;
};

export const handleSize = (): SizeStyle => {
	return {
		border: 2,
		transform: 4,
		offset: 4
	};
};

export const handleHue = (colorMode: ColorMode, color: Color, isLight: boolean): ColorHues => {
	if (colorMode === 'light') {
		return color === 'gray'
			? isLight
				? 200
				: 400
			: color === 'white'
			? 100
			: color === 'black'
			? 800
			: isLight
			? 200
			: 500;
	} else {
		return color === 'gray'
			? isLight
				? 700
				: 500
			: color === 'white'
			? 100
			: color === 'black'
			? 800
			: isLight
			? 700
			: 400;
	}
};

export const handleAmount = (variant: Variant): Amounts => {
	return {
		back: variant === 'contained' ? 0.1 : 0,
		hover: 0.05,
		active: 0.15
	};
};
