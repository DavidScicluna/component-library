import { memoize } from 'lodash';

/**
 * This method will check whether the user's device is a touch device or not
 *
 * @returns boolean: Either its a touch device or not
 */
export const checkIsTouchDevice = memoize((): boolean => {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	// || navigator.msMaxTouchPoints > 0;
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
export const convertStringToNumber = memoize((string: string, cut: string): number => {
	return Number(string.replace(cut, ''));
});
