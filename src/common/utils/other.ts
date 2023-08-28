import memoize from 'micro-memoize';

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
