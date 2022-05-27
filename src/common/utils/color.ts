import { ColorMode } from '@chakra-ui/react';

import { memoize } from 'lodash';

import { Theme, ColorHues, Color } from '../../theme/types';

type Type = 'text.primary' | 'text.secondary' | 'divider' | 'light' | 'lightest' | 'dark' | 'darkest' | 'color';

type GetHueProps = {
	colorMode: ColorMode;
	type: Type;
};

export const getHue = memoize(({ colorMode, type }: GetHueProps): ColorHues => {
	switch (type) {
		case 'text.primary':
			return colorMode === 'light' ? 900 : 50;
		case 'text.secondary':
			return colorMode === 'light' ? 400 : 500;
		case 'divider':
			return colorMode === 'light' ? 200 : 700;
		case 'light':
			return 100;
		case 'lightest':
			return 50;
		case 'dark':
			return 800;
		case 'darkest':
			return 900;
		case 'color':
			return colorMode === 'light' ? 500 : 400;
	}
});

type OmittedColors = 'transparent' | 'black' | 'white';

type GetColorProps = {
	theme: Theme;
	colorMode: ColorMode;
	color?: Exclude<Color, OmittedColors>;
	type: Type;
};

export const getColor = memoize(({ theme, colorMode, color: colorProp, type }: GetColorProps): string => {
	const color: Color = colorProp || 'gray';

	return theme.colors[color][getHue({ type, colorMode })];
});
