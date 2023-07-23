import { forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetClass, useGetResponsiveValue } from '@common/hooks';
import type {
	FontSize,
	FontWeight,
	LineHeight,
	TextAlign,
	TextTransform,
	Whitespace,
	WordBreak
} from '@common/types/theme';

import Box from '@components/Layout/Box';

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
} from './common/constants';
import type { TextElementType, TextProps, TextRef } from './common/types';

const Text = forwardRef(function Text<Element extends TextElementType>(
	props: TextProps<TextElementType>,
	ref: TextRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = __DEFAULT_TEXT_ALIGN__,
		fontSize = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight = __DEFAULT_TEXT_FONT_WEIGHT__,
		lineHeight = __DEFAULT_TEXT_LINE_HEIGHT__,
		transform = __DEFAULT_TEXT_TRANSFORM__,
		isItalic: italic = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown: overflown = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whitespace = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak = __DEFAULT_TEXT_WORD_BREAK__,
		...rest
	} = props;

	const alignClassName = useGetClass<TextAlign>(align, ['typography', 'align']);
	const fontSizeClassName = useGetClass<FontSize>(fontSize, ['typography', 'fontSize']);
	const fontWeightClassName = useGetClass<FontWeight>(fontWeight, ['typography', 'fontWeight']);
	const lineHeightClassName = useGetClass<LineHeight>(lineHeight, ['typography', 'lineHeight']);
	const transformClassName = useGetClass<TextTransform>(transform, ['typography', 'transform']);
	const whitespaceClassName = useGetClass<Whitespace>(whitespace, ['typography', 'whitespace']);
	const wordBreakClassName = useGetClass<WordBreak>(wordBreak, ['typography', 'wordBreak']);

	const isItalic = useGetResponsiveValue<boolean>(italic);
	const isOverflown = useGetResponsiveValue<boolean>(overflown);

	return (
		<Box
			{...(rest as TextProps<Element>)}
			ref={ref}
			className={classNames(
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
					['truncate']: isOverflown,
					[className]: !!className
				}
			)}
		>
			{children}
		</Box>
	);
});

export default Text;
