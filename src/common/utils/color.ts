import memoize from 'micro-memoize';

import { Color, ColorHues, Theme } from '../../theme/types';
import { AppColorMode } from '../types';

type Type =
	| 'background'
	| 'text.primary'
	| 'text.secondary'
	| 'divider'
	| 'light'
	| 'lighter'
	| 'lightest'
	| 'dark'
	| 'darker'
	| 'darkest'
	| 'color'
	| 'default';

export type GetHueProps = {
	colorMode: AppColorMode;
	type: Type;
};

export const getHue = memoize(({ colorMode, type }: GetHueProps): ColorHues => {
	switch (type) {
		case 'background':
			return colorMode === 'light' ? 50 : 900;
		case 'text.primary':
			return colorMode === 'light' ? 900 : 50;
		case 'text.secondary':
			return colorMode === 'light' ? 500 : 400;
		case 'divider':
			return colorMode === 'light' ? 200 : 700;
		case 'light':
			return 200;
		case 'lighter':
			return 100;
		case 'lightest':
			return 50;
		case 'dark':
			return 700;
		case 'darker':
			return 800;
		case 'darkest':
			return 900;
		case 'color':
			return colorMode === 'light' ? 600 : 300;
		case 'default':
			return colorMode === 'light' ? 500 : 400;
	}
});

export type GetColorProps = {
	theme: Theme;
	colorMode: AppColorMode;
	color?: Exclude<Color, 'transparent' | 'black' | 'white'>;
	type: Type;
};

export const getColor = memoize(({ theme, colorMode, color: colorProp, type }: GetColorProps): string => {
	const color: Color = colorProp || 'gray';
	return theme.colors[color][getHue({ type, colorMode })];
});
