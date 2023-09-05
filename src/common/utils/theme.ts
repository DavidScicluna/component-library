import { includes } from 'lodash-es';
import memoize from 'micro-memoize';

import { durations, fontSizes } from '@common/data';
import type { ThemeDuration, ThemeFontSize } from '@common/types';

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
