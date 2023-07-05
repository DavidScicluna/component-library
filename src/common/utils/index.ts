import { isArray, isObject } from 'lodash-es';
import memoize from 'micro-memoize';

import { FontSize, LineHeight, Theme } from '../../theme/types';
import { Breakpoint, OS, ResponsiveValue } from '../types';

/**
 * This method will get the OS type of the user's device
 *
 * @returns OS - 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
 */
export const getOS = memoize((): OS => {
	const { userAgent } = window.navigator;
	const macosPlatforms = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i;
	const windowsPlatforms = /(Win32)|(Win64)|(Windows)|(WinCE)/i;
	const iosPlatforms = /(iPhone)|(iPad)|(iPod)/i;

	if (macosPlatforms.test(userAgent)) {
		return 'macos';
	}
	if (iosPlatforms.test(userAgent)) {
		return 'ios';
	}
	if (windowsPlatforms.test(userAgent)) {
		return 'windows';
	}
	if (/Android/i.test(userAgent)) {
		return 'android';
	}
	if (/Linux/i.test(userAgent)) {
		return 'linux';
	}

	return 'undetermined';
});

/**
 * This method will check whether the user's device is a touch screen or not
 *
 * @returns boolean: Either its a touch device or not
 */
export const checkIsTouchDevice = memoize((): boolean => 'ontouchstart' in window || navigator.maxTouchPoints > 0);

/**
 *
 * This method will convert a PX size to REM size
 *
 * @param rem - number: px size
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
export const convertREMToPixels = memoize(
	(rem: number): number => rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
);

/**
 * This method will remove a portion of a string from the string passed and convert the string to a number
 *
 * @param string - string: String value to be cut & converted
 * @param cut - string: The string to cut from the string
 * @returns number: A number from the string passed
 */
export const convertStringToNumber = memoize((string: string, cut: string): number => Number(string.replace(cut, '')));

type GetFontSizeHeightProps = { theme: Theme; fontSize?: FontSize; lineHeight?: LineHeight };

export const getFontSizeHeight = memoize((props: GetFontSizeHeightProps): number => {
	const { theme, fontSize = 'md', lineHeight = 'base' } = props;

	return (
		convertREMToPixels(convertStringToNumber(theme.fontSizes[fontSize], 'rem')) *
		Number(theme.lineHeights[lineHeight])
	);
});

type ConvertEasingsToArrayProps = { easing: string };

// TODO: Convert all utils if only 1 param dont use object
export const convertEasingsToArray = memoize(({ easing }: ConvertEasingsToArrayProps): number[] =>
	easing
		.replaceAll('cubic-bezier', '')
		.replaceAll('(', '')
		.replaceAll(')', '')
		.replaceAll(' ', '')
		.split(',')
		.map((number) => Number(number))
);

/**
 * This method will check which type the responsive value is if its an array, object or default value
 *
 * @param value - ResponsiveValue
 * @returns - 'array' | 'object' | 'default'
 */
export const checkResponsiveValue = memoize(<D>(value: ResponsiveValue<D>): 'array' | 'object' | 'default' => {
	if (isArray(value)) {
		return 'array';
	} else if (isObject(value)) {
		return 'object';
	} else {
		return 'default';
	}
});

/**
 * This method will return the appropriate item depending on current dimensions of the users device
 *
 * @param value - ResponsiveValue
 * @returns - The item with the array or object that aligns with the breakpoint
 */
export const getResponsiveValue = memoize(<D>(value: ResponsiveValue<D>): D => {
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

	if (isArray(value)) {
		switch (value.length) {
			case 1:
				return value[0] as D;
			case 2:
				return (breakpoint === 'xs' ? value[0] : value[1]) as D;
			case 3:
				return (breakpoint === 'xs' ? value[0] : breakpoint === 'sm' ? value[1] : value[2]) as D;
			case 4:
				return (
					breakpoint === 'xs'
						? value[0]
						: breakpoint === 'sm'
						? value[1]
						: breakpoint === 'md'
						? value[2]
						: value[3]
				) as D;
			case 5:
				return (
					breakpoint === 'xs'
						? value[0]
						: breakpoint === 'sm'
						? value[1]
						: breakpoint === 'md'
						? value[2]
						: breakpoint === 'lg'
						? value[3]
						: value[4]
				) as D;
			case 6:
				return (
					breakpoint === 'xs'
						? value[0]
						: breakpoint === 'sm'
						? value[1]
						: breakpoint === 'md'
						? value[2]
						: breakpoint === 'lg'
						? value[3]
						: breakpoint === 'xl'
						? value[4]
						: value[5]
				) as D;
		}
	} else if (isObject(value)) {
		return value[breakpoint];
	} else {
		return value;
	}

	return value as D;
});
