import type {
	TextAlignClass,
	TextLetterSpacingClass,
	TextLineClampClass,
	TextTransformClass,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	UserSelectClass,
	WhiteSpaceClass,
	WordBreakClass
} from '@common/types';

import type { TextDecorationProps, TextDefaultElement } from '../types';

export const __DEFAULT_TEXT_AS__: TextDefaultElement = 'p';
export const __DEFAULT_TEXT_ALIGN__: TextAlignClass = 'left';
export const __DEFAULT_TEXT_DECORATION__: TextDecorationProps = {
	color: 'transparent',
	style: 'solid',
	thickness: 0,
	offset: 'auto',
	variant: 'underline'
};
export const __DEFAULT_TEXT_FONT_SIZE__: ThemeFontSize = 'md';
export const __DEFAULT_TEXT_FONT_WEIGHT__: ThemeFontWeight = 'normal';
export const __DEFAULT_TEXT_LETTER_SPACING__: TextLetterSpacingClass = 'normal';
export const __DEFAULT_TEXT_LINE_CLAMP__: TextLineClampClass = 'none';
export const __DEFAULT_TEXT_LINE_HEIGHT__: ThemeLineHeight = 'normal';
export const __DEFAULT_TEXT_TRANSFORM__: TextTransformClass = 'normal';
export const __DEFAULT_TEXT_IS_ITALIC__ = false;
export const __DEFAULT_TEXT_IS_OVERFLOWN__ = false;
export const __DEFAULT_TEXT_WHITESPACE__: WhiteSpaceClass = 'normal';
export const __DEFAULT_TEXT_WORD_BREAK__: WordBreakClass = 'normal';
export const __DEFAULT_TEXT_USER_SELECT__: UserSelectClass = 'text';
