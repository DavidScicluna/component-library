import { compact, includes } from 'lodash-es';
import memoize from 'micro-memoize';

import { fontSizes } from '@common/data';
import theme from '@common/theme';
import type { ThemeFontSize, ThemeLineHeight } from '@common/types';

import type { IconCategory } from '@components/DataDisplay';

import { convertREMToPixels, convertStringToNumber } from '.';

export const getIconFontFamily = memoize((category: IconCategory): string => {
	return `'${compact([
		'Material Icons',
		category === 'outlined' ? 'Outlined' : null,
		category === 'twoTone' ? 'Two Tone' : null
	]).join(' ')}', sans-serif`;
});

/**
 * This method will get the full height of a font
 *
 * @param fontSize - FontSize: String value to be cut & converted
 * @param lineHeight - LineHeight: The string to cut from the string
 */
export const getFontSizeHeight = memoize(
	(fontSize: ThemeFontSize = 'md', lineHeight: ThemeLineHeight = 'normal'): number => {
		return (
			convertREMToPixels(convertStringToNumber(theme.fontSizes[fontSize], 'rem')) *
			Number(theme.lineHeights[lineHeight])
		);
	}
);

type CheckFontSize = ThemeFontSize | number | string;
type CheckFontSizeType = 'theme' | 'other';

/**
 * This method will check if the siz param passed is from theme or its a string or number
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
