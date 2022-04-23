import { ColorMode } from '@chakra-ui/react';

import { Color, ColorHues } from '../../../../../theme/types';

export const handleHue = (colorMode: ColorMode, color: Color): ColorHues => {
	if (colorMode === 'light') {
		return color === 'gray' ? 400 : color === 'white' ? 100 : color === 'black' ? 800 : 500;
	} else {
		return color === 'gray' ? 500 : color === 'white' ? 100 : color === 'black' ? 800 : 400;
	}
};
