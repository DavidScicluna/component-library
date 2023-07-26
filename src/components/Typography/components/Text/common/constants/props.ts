import type {
	FontSize,
	FontWeight,
	LineHeight,
	TextAlign,
	TextTransform,
	Whitespace,
	WordBreak
} from '@common/types/theme';

import { TextElementType } from '../types';

export const __DEFAULT_TEXT_ELEMENT__: TextElementType = 'p';

export const __DEFAULT_TEXT_ALIGN__: TextAlign = 'left';
export const __DEFAULT_TEXT_FONT_SIZE__: FontSize = 'md';
export const __DEFAULT_TEXT_FONT_WEIGHT__: FontWeight = 'normal';
export const __DEFAULT_TEXT_LINE_HEIGHT__: LineHeight = 'normal';
export const __DEFAULT_TEXT_TRANSFORM__: TextTransform = 'normal';
export const __DEFAULT_TEXT_IS_ITALIC__ = false;
export const __DEFAULT_TEXT_IS_OVERFLOWN__ = false;
export const __DEFAULT_TEXT_WHITESPACE__: Whitespace = 'normal';
export const __DEFAULT_TEXT_WORD_BREAK__: WordBreak = 'normal';
