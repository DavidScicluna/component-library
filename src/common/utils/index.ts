import { memoize } from 'lodash';

import { OS } from '../types';

/**
 * This method will get the OS type of the user's device
 *
 * @returns OS - 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
 */
export const getOS = (): OS => {
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
};

/**
 * This method will check whether the user's device is a touch screen or not
 *
 * @returns boolean: Either its a touch device or not
 */
export const checkIsTouchDevice = (): boolean => {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

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
export const convertStringToNumber = memoize((string: string, cut: string): number => {
	return Number(string.replace(cut, ''));
});

type ConvertEasingsToArrayProps = { easing: string };

export const convertEasingsToArray = memoize(({ easing }: ConvertEasingsToArrayProps): number[] => {
	return easing
		.replaceAll('cubic-bezier', '')
		.replaceAll('(', '')
		.replaceAll(')', '')
		.replaceAll(' ', '')
		.split(',')
		.map((number) => Number(number));
});
