import { compact, isArray, isObject } from 'lodash-es';
import memoize from 'micro-memoize';

import theme from '@common/theme';
import type { ResponsiveArrayValue, ResponsiveObjectValue, ResponsiveValue } from '@common/types';
import type { Breakpoint, FontSize, LineHeight } from '@common/types/theme';

import type { IconCategory } from '@components/DataDisplay';

export const getIconFontFamily = memoize((category: IconCategory): string => {
	return `'${compact([
		'Material Icons',
		category === 'outlined' ? 'Outlined' : null,
		category === 'twoTone' ? 'Two Tone' : null
	]).join(' ')}', sans-serif`;
});

/**
 * This method will check whether the user's device is a touch screen or not
 *
 * @returns boolean: Either its a touch device or not
 */
export const checkIsTouchDevice = memoize((): boolean => 'ontouchstart' in window || navigator.maxTouchPoints > 0);

/**
 * This method will convert a PX size to REM size
 *
 * @param px - number: PX size
 * @returns - number: Converted REM size from PX size
 */
export const convertPixelsToREM = memoize((px: number): number => {
	const base = 16;
	return (1 / base) * px;
});

/**
 * This method will convert a REM size to PX size
 *
 * @param rem - number: REM size
 * @returns - number: Converted PX size from REM size
 */
export const convertREMToPixels = memoize((rem: number): number => {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
});

/**
 * This method will remove a portion of a string from the string passed and convert the string to a number
 *
 * @param string - string: String value to be cut & converted
 * @param cut - string: The string to cut from the string
 * @returns number: A number from the string passed
 */
export const convertStringToNumber = memoize((string: string, cut: string): number => Number(string.replace(cut, '')));

/**
 * This method will get the full height of a font
 *
 * @param fontSize - FontSize: String value to be cut & converted
 * @param lineHeight - LineHeight: The string to cut from the string
 */
export const getFontSizeHeight = memoize((fontSize: FontSize = 'md', lineHeight: LineHeight = 'normal'): number => {
	return (
		convertREMToPixels(convertStringToNumber(theme.fontSizes[fontSize], 'rem')) *
		Number(theme.lineHeights[lineHeight])
	);
});

/**
 * This method will return the appropriate responsive value depending on current dimensions of the users device
 *
 * @param value - ResponsiveValue
 * @returns - The responsive value within the array or object that aligns with the breakpoint
 */
export const getResponsiveValue = memoize(<D>(value: ResponsiveValue<D>): D => {
	const status = isArray(value) ? 'array' : isObject(value) ? 'object' : 'default';
	const breakpoint: Breakpoint = globalThis?.window?.matchMedia('(min-width: 1536px)')
		? '2xl'
		: globalThis?.window?.matchMedia('(min-width: 1280px)')
		? 'xl'
		: globalThis?.window?.matchMedia('(min-width: 1024px)')
		? 'lg'
		: globalThis?.window?.matchMedia('(min-width: 768px)')
		? 'md'
		: globalThis?.window?.matchMedia('(min-width: 640px)')
		? 'sm'
		: 'xs';

	if (status === 'array') {
		const v = value as ResponsiveArrayValue<D>;
		switch (v.length) {
			case 1:
				return v[0] as D;
			case 2:
				return (breakpoint === 'xs' ? v[0] : v[1]) as D;
			case 3:
				return (breakpoint === 'xs' ? v[0] : breakpoint === 'sm' ? v[1] : v[2]) as D;
			case 4:
				return (
					breakpoint === 'xs' ? v[0] : breakpoint === 'sm' ? v[1] : breakpoint === 'md' ? v[2] : v[3]
				) as D;
			case 5:
				return (
					breakpoint === 'xs'
						? v[0]
						: breakpoint === 'sm'
						? v[1]
						: breakpoint === 'md'
						? v[2]
						: breakpoint === 'lg'
						? v[3]
						: v[4]
				) as D;
			case 6:
				return (
					breakpoint === 'xs'
						? v[0]
						: breakpoint === 'sm'
						? v[1]
						: breakpoint === 'md'
						? v[2]
						: breakpoint === 'lg'
						? v[3]
						: breakpoint === 'xl'
						? v[4]
						: v[5]
				) as D;
		}
	} else if (status === 'object') {
		const v = value as ResponsiveObjectValue<D>;
		return v[breakpoint];
	}
	return value as D;
});
