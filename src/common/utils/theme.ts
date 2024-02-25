import { includes } from 'lodash-es';
import memoize from 'micro-memoize';
import { __DEFAULT_COLOR__, __DEFAULT_DURATION__, __DEFAULT_FONT_SIZE__ } from 'src';

import { colors, durations, fontSizes } from '@common/data';
import type { ThemeColor, ThemeDuration, ThemeFontSize } from '@common/types';

type CheckColor = ThemeColor | string;
type CheckColorType = 'theme' | 'class' | 'other';

/**
 * This method will check if the color param passed is from theme or its a string or number
 *
 * @param color
 * @returns 'theme' or 'other'
 */
export const checkColorType = memoize((color: CheckColor = __DEFAULT_COLOR__): CheckColorType => {
	if (includes(colors, color)) {
		return 'theme';
	} else if (color.includes('-')) {
		return 'class';
	} else {
		return 'other';
	}
});

type CheckFontSize = ThemeFontSize | number | string;
type CheckFontSizeType = 'theme' | 'class' | 'other';

/**
 * This method will check if the size param passed is from theme or its a string or number
 *
 * @param size
 * @returns 'theme' or 'other'
 */
export const checkFontSizeType = memoize((size: CheckFontSize = __DEFAULT_FONT_SIZE__): CheckFontSizeType => {
	if (includes(fontSizes, size)) {
		return 'theme';
	} else if (typeof size === 'string' && size.includes('-')) {
		return 'class';
	} else {
		return 'other';
	}
});

type CheckDuration = ThemeDuration | number | string;
type CheckDurationType = 'theme' | 'class' | 'other';

/**
 * This method will check if the duration param passed is from theme or its a string or number
 *
 * @param duration
 * @returns 'theme' or 'other'
 */
export const checkDurationType = memoize((duration: CheckDuration = __DEFAULT_DURATION__): CheckDurationType => {
	if (includes(durations, duration)) {
		return 'theme';
	} else if (typeof duration === 'string' && duration.includes('-')) {
		return 'class';
	} else {
		return 'other';
	}
});
