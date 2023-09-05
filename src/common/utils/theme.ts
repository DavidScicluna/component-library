import { includes } from 'lodash-es';
import memoize from 'micro-memoize';


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

