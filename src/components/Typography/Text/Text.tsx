import { forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import { FontSize, FontWeight, LineHeight, TextAlign, TextTransform, Whitespace, WordBreak } from '@common/types/theme';
import { getResponsiveValue } from '@common/utils';

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

	const alignClassName = useMemo<string>(() => {
		const ta = getResponsiveValue<TextAlign>(align);
		return classes.typography.align[ta];
	}, [align]);
	const fontSizeClassName = useMemo<string>(() => {
		const fs = getResponsiveValue<FontSize>(fontSize);
		return classes.typography.fontSize[fs];
	}, [fontSize]);
	const fontWeightClassName = useMemo<number>(() => {
		const fw = getResponsiveValue<FontWeight>(fontWeight);
		return classes.typography.fontWeight[fw];
	}, [fontWeight]);
	const lineHeightClassName = useMemo<string | number>(() => {
		const lh = getResponsiveValue<LineHeight>(lineHeight);
		return classes.typography.lineHeight[lh];
	}, [lineHeight]);
	const transformClassName = useMemo<string>(() => {
		const t = getResponsiveValue<TextTransform>(transform);
		return classes.typography.transform[t];
	}, [transform]);
	const whitespaceClassName = useMemo<string>(() => {
		const w = getResponsiveValue<Whitespace>(whitespace);
		return classes.typography.whitespace[w];
	}, [whitespace]);
	const wordBreakClassName = useMemo<string>(() => {
		const wb = getResponsiveValue<WordBreak>(wordBreak);
		return classes.typography.wordBreak[wb];
	}, [wordBreak]);

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
