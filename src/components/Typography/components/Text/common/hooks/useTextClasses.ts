import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type {
	ClassName,
	TextAlignClass,
	TextLineClampClass,
	TextTransformClass,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	Undefinable,
	WhitespaceClass,
	WordBreakClass
} from '@common/types';

import {
	__DEFAULT_TEXT_ALIGN__,
	__DEFAULT_TEXT_FONT_SIZE__,
	__DEFAULT_TEXT_FONT_WEIGHT__,
	__DEFAULT_TEXT_IS_ITALIC__,
	__DEFAULT_TEXT_IS_OVERFLOWN__,
	__DEFAULT_TEXT_LINE_HEIGHT__,
	__DEFAULT_TEXT_TRANSFORM__,
	__DEFAULT_TEXT_WHITESPACE__,
	__DEFAULT_TEXT_WORD_BREAK__
} from '../constants';
import type { TextElement, TextProps } from '../types';

type UseTextClassesProps<Element extends TextElement> = Pick<
	TextProps<Element>,
	| 'align'
	| 'color'
	| 'fontSize'
	| 'fontWeight'
	| 'lineClamp'
	| 'lineHeight'
	| 'textTransform'
	| 'isItalic'
	| 'isOverflown'
	| 'whitespace'
	| 'wordBreak'
>;
type UseTextClassesReturn = ClassName;

const useTextClasses = <Element extends TextElement>(props: UseTextClassesProps<Element>): UseTextClassesReturn => {
	const {
		align = __DEFAULT_TEXT_ALIGN__,
		color: colorClassName,
		fontSize = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight = __DEFAULT_TEXT_FONT_WEIGHT__,
		lineClamp,
		lineHeight = __DEFAULT_TEXT_LINE_HEIGHT__,
		textTransform = __DEFAULT_TEXT_TRANSFORM__,
		isItalic = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whitespace = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak = __DEFAULT_TEXT_WORD_BREAK__
	} = props;

	const alignClassName = useGetClass<TextAlignClass>(align, ['typography', 'align']);
	const fontSizeClassName = useGetClass<ThemeFontSize>(fontSize, ['typography', 'font_size']);
	const fontWeightClassName = useGetClass<ThemeFontWeight>(fontWeight, ['typography', 'font_weight']);
	const lineClampClassName = useGetClass<Undefinable<TextLineClampClass>>(lineClamp, ['typography', 'line_clamp']);
	const lineHeightClassName = useGetClass<ThemeLineHeight>(lineHeight, ['typography', 'line_height']);
	const textTransformClassName = useGetClass<TextTransformClass>(textTransform, ['typography', 'transform']);
	const whitespaceClassName = useGetClass<WhitespaceClass>(whitespace, ['typography', 'whitespace']);
	const wordBreakClassName = useGetClass<WordBreakClass>(wordBreak, ['typography', 'word_break']);

	return classNames(
		alignClassName,
		colorClassName,
		fontSizeClassName,
		fontWeightClassName,
		lineHeightClassName,
		textTransformClassName,
		whitespaceClassName,
		wordBreakClassName,
		{
			// [colorClassName]: !colorClassName.includes('#'),
			[lineClampClassName]: !!lineClamp,
			[classes.typography.font_style.italic]: isItalic,
			[classes.typography.font_style['not-italic']]: !isItalic,
			[classes.typography.text_overflow.truncate]: isOverflown
		}
	);
};

export default useTextClasses;