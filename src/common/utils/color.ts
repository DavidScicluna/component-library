import { ColorMode } from '@chakra-ui/react';

import { memoize } from 'lodash';

import { Theme, ColorHues, Color } from '../../theme/types';

type Type = 'text.primary' | 'text.secondary' | 'divider' | 'black' | 'white' | 'color';

type GetHueProps = {
	colorMode: ColorMode;
	type: Type;
};

export const getHue = memoize(({ type, colorMode }: GetHueProps): ColorHues => {
	switch (type) {
		case 'text.primary':
			return colorMode === 'light' ? 900 : 50;
		case 'text.secondary':
			return colorMode === 'light' ? 400 : 500;
		case 'divider':
			return colorMode === 'light' ? 200 : 700;
		case 'black':
			return 900;
		case 'white':
			return 50;
		case 'color':
			return colorMode === 'light' ? 500 : 400;
	}
});

type OmittedColors = 'transparent' | 'black' | 'white';

type GetColorProps = {
	theme: Theme;
	colorMode: ColorMode;
	type: Type;
	color?: Exclude<Color, OmittedColors>;
};

export const getColor = memoize(({ theme, colorMode, type, color: colorProp }: GetColorProps): string => {
	const color: Color = colorProp || 'gray';

	return theme.colors[color][getHue({ type, colorMode })];
});
