import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';

import { Box } from '@components/Box';

import {
	__DEFAULT_TEXT_ALIGN__,
	__DEFAULT_TEXT_FONT_SIZE__,
	__DEFAULT_TEXT_FONT_WEIGHT__,
	__DEFAULT_TEXT_IS_ITALIC__,
	__DEFAULT_TEXT_IS_OVERFLOWN__,
	__DEFAULT_TEXT_LINE_CLAMP__,
	__DEFAULT_TEXT_LINE_HEIGHT__,
	__DEFAULT_TEXT_TRANSFORM__,
	__DEFAULT_TEXT_WHITESPACE__,
	__DEFAULT_TEXT_WORD_BREAK__
} from './common/constants';
import { useTextClasses, useTextResponsiveValues, useTextStyles } from './common/hooks';
import { __KEYS_TEXT_CLASS__ } from './common/keys';
import type { TextDefaultElement, TextElement, TextProps, TextRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Text = forwardRef(function Text<Element extends TextElement = TextDefaultElement>(
	props: TextProps<Element>,
	ref: TextRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		align: alignProp = __DEFAULT_TEXT_ALIGN__,
		fontSize: fontSizeProp = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight: fontWeightProp = __DEFAULT_TEXT_FONT_WEIGHT__,
		lineClamp: lineClampProp = __DEFAULT_TEXT_LINE_CLAMP__,
		lineHeight: lineHeightProp = __DEFAULT_TEXT_LINE_HEIGHT__,
		textTransform: textTransformProp = __DEFAULT_TEXT_TRANSFORM__,
		isItalic: isItalicProp = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown: isOverflownProp = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whitespace: whitespaceProp = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak: wordBreakProp = __DEFAULT_TEXT_WORD_BREAK__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const {
		align,
		fontSize,
		fontWeight,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whitespace,
		wordBreak
	} = useTextResponsiveValues({
		align: alignProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
		lineClamp: lineClampProp,
		lineHeight: lineHeightProp,
		textTransform: textTransformProp,
		isItalic: isItalicProp,
		isOverflown: isOverflownProp,
		whitespace: whitespaceProp,
		wordBreak: wordBreakProp
	});

	const classes = useTextClasses({
		color,
		colorMode,
		align,
		fontSize,
		fontWeight,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whitespace,
		wordBreak
	});
	const styles = useTextStyles({ color });

	return (
		<Box
			{...(rest as TextProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_TEXT_CLASS__, classes, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

// Text.displayName = 'Text';

export default Text;
