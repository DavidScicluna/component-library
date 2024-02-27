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

export const DEFAULT_TEXT_AS: TextDefaultElement = 'p';
export const DEFAULT_TEXT_ALIGN: TextAlignClass = 'left';
export const DEFAULT_TEXT_DECORATION: TextDecorationProps = {
	color: 'transparent',
	style: 'solid',
	thickness: 0,
	offset: 'auto',
	variant: 'no-underline'
};
export const DEFAULT_TEXT_FONT_SIZE: ThemeFontSize = 'md';
export const DEFAULT_TEXT_FONT_WEIGHT: ThemeFontWeight = 'normal';
export const DEFAULT_TEXT_LETTER_SPACING: TextLetterSpacingClass = 'normal';
export const DEFAULT_TEXT_LINE_CLAMP: TextLineClampClass = 'none';
export const DEFAULT_TEXT_LINE_HEIGHT: ThemeLineHeight = 'normal';
export const DEFAULT_TEXT_TRANSFORM: TextTransformClass = 'normal';
export const DEFAULT_TEXT_IS_ITALIC = false;
export const DEFAULT_TEXT_IS_OVERFLOWN = false;
export const DEFAULT_TEXT_WHITESPACE: WhiteSpaceClass = 'normal';
export const DEFAULT_TEXT_WORD_BREAK: WordBreakClass = 'normal';
export const DEFAULT_TEXT_USER_SELECT: UserSelectClass = 'text';
