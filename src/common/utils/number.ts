import memoize from 'micro-memoize';

/**
 * This function will return percentage from value, max & min values passed
 *
 * @param value - The value to get the percentage of
 * @param max - The maximum number allowed
 * @param min - The minimum number allowed
 * @returns - The percentage
 */
export const getPercentage = memoize((value: number, max: number, min: number): number => {
	return ((value - min) / (max - min)) * 100;
});
