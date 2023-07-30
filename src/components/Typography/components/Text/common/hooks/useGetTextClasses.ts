import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type {
	FontSize,
	FontWeight,
	LineHeight,
	TextAlign,
	TextTransform,
	Whitespace,
	WordBreak
} from '@common/types/theme';

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

type UseGetTextClassesProps<Element extends TextElement> = Pick<
	TextProps<Element>,
	| 'align'
	| 'fontSize'
	| 'fontWeight'
	| 'lineHeight'
	| 'transform'
	| 'isItalic'
	| 'isOverflown'
	| 'whitespace'
	| 'wordBreak'
>;
type UseGetTextClassesReturn = ClassName;

const useGetTextClasses = <Element extends TextElement>(
	props: UseGetTextClassesProps<Element>
): UseGetTextClassesReturn => {
	const {
		align = __DEFAULT_TEXT_ALIGN__,
		fontSize = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight = __DEFAULT_TEXT_FONT_WEIGHT__,
		lineHeight = __DEFAULT_TEXT_LINE_HEIGHT__,
		transform = __DEFAULT_TEXT_TRANSFORM__,
		isItalic = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whitespace = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak = __DEFAULT_TEXT_WORD_BREAK__
	} = props;

	const alignClassName = useGetClass<TextAlign>(align, ['typography', 'align']);
	const fontSizeClassName = useGetClass<FontSize>(fontSize, ['typography', 'fontSize']);
	const fontWeightClassName = useGetClass<FontWeight>(fontWeight, ['typography', 'fontWeight']);
	const lineHeightClassName = useGetClass<LineHeight>(lineHeight, ['typography', 'lineHeight']);
	const transformClassName = useGetClass<TextTransform>(transform, ['typography', 'transform']);
	const whitespaceClassName = useGetClass<Whitespace>(whitespace, ['typography', 'whitespace']);
	const wordBreakClassName = useGetClass<WordBreak>(wordBreak, ['typography', 'wordBreak']);

	return classNames(
		alignClassName,
		fontSizeClassName,
		fontWeightClassName,
		lineHeightClassName,
		transformClassName,
		whitespaceClassName,
		wordBreakClassName,
		{
			['italic']: isItalic,
			['not-italic']: !isItalic,
			['truncate']: isOverflown
		}
	);
};

export default useGetTextClasses;
