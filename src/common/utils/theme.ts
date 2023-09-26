import { includes } from 'lodash-es';
import memoize from 'micro-memoize';

import { colors, durations, fontSizes } from '@common/data';
import type { ThemeColor, ThemeDuration, ThemeFontSize } from '@common/types';

type CheckColor = ThemeColor | string;
type CheckColorType = 'theme' | 'other';

/**
 * This method will check if the color param passed is from theme or its a string or number
 *
 * @param color
 * @returns 'theme' or 'other'
 */
export const checkColorType = memoize((color: CheckColor): CheckColorType => {
	if (includes(colors, color)) {
		return 'theme';
	} else {
		return 'other';
	}
});

type CheckFontSize = ThemeFontSize | number | string;
type CheckFontSizeType = 'theme' | 'other';

/**
 * This method will check if the size param passed is from theme or its a string or number
 *
 * @param size
 * @returns 'theme' or 'other'
 */
export const checkFontSizeType = memoize((size: CheckFontSize): CheckFontSizeType => {
	if (includes(fontSizes, size)) {
		return 'theme';
	} else {
		return 'other';
	}
});

type CheckDuration = ThemeDuration | number | string;
type CheckDurationType = 'theme' | 'other';

/**
 * This method will check if the duration param passed is from theme or its a string or number
 *
 * @param duration
 * @returns 'theme' or 'other'
 */
export const checkDurationType = memoize((duration: CheckDuration): CheckDurationType => {
	if (includes(durations, duration)) {
		return 'theme';
	} else {
		return 'other';
	}
});
