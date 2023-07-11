import memoize from 'micro-memoize';

import theme from '../theme';
import { Color, ColorHue, ColorMode } from '../types/theme';

export type ColorHueType =
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

export type GetColorHueProps = {
	colorMode: ColorMode;
	type: ColorHueType;
};

/**
 * This method will return the appropriate color hue depending on the colorMode & type params passed
 *
 * @param colorMode - light | dark
 * @param type - background | text.primary | text.secondary | divider | light | lighter | lightest | dark | darker | darkest | color | default
 * @returns - 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
 */
export const getColorHue = memoize(({ colorMode, type }: GetColorHueProps): ColorHue => {
	switch (type) {
		case 'background':
			return colorMode === 'light' ? 50 : 950;
		case 'text.primary':
			return colorMode === 'light' ? 950 : 50;
		case 'text.secondary':
			return colorMode === 'light' ? 600 : 400;
		case 'divider':
			return colorMode === 'light' ? 200 : 800;
		case 'light':
			return 200;
		case 'lighter':
			return 100;
		case 'lightest':
			return 50;
		case 'dark':
			return 800;
		case 'darker':
			return 900;
		case 'darkest':
			return 950;
		case 'color':
			return colorMode === 'light' ? 600 : 400;
		case 'default':
			return 500;
	}
});

export type GetColorProps = {
	color: Color;
	colorMode: ColorMode;
	type: ColorHueType;
};

/**
 * This method will return the appropriate hex color depending on the color, colorMode & type params passed
 *
 * @param color - transparent | black | white | gray | red | pink | purple | deep_purple | indigo | blue | light_blue | cyan | teal | green | light_green | lime | yellow | orange | deep_orange
 * @param colorMode - light | dark
 * @param type - background | text.primary | text.secondary | divider | light | lighter | lightest | dark | darker | darkest | color | default
 * @returns - Hex Color
 */
export const getColor = memoize(({ color, colorMode, type }: GetColorProps): string => {
	const hue = getColorHue({ colorMode, type });
	return theme.colors[color][hue];
});

/**
 * This method will return the appropriate colorMode depending on the user os settings
 *
 * @returns - light | dark
 */
export const getColorMode = memoize((): ColorMode => {
	if (globalThis?.window?.matchMedia && globalThis?.window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
		return 'dark';
	}
	return 'light';
});
