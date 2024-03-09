import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';

import { Box } from '@components/Box';

import {
	DEFAULT_TEXT_ALIGN,
	DEFAULT_TEXT_AS,
	DEFAULT_TEXT_DECORATION,
	DEFAULT_TEXT_FONT_SIZE,
	DEFAULT_TEXT_FONT_WEIGHT,
	DEFAULT_TEXT_IS_ITALIC,
	DEFAULT_TEXT_IS_OVERFLOWN,
	DEFAULT_TEXT_LETTER_SPACING,
	DEFAULT_TEXT_LINE_CLAMP,
	DEFAULT_TEXT_LINE_HEIGHT,
	DEFAULT_TEXT_TRANSFORM,
	DEFAULT_TEXT_USER_SELECT,
	DEFAULT_TEXT_WHITESPACE,
	DEFAULT_TEXT_WORD_BREAK
} from './common/constants';
import { useTextClasses, useTextResponsiveValues, useTextStyles } from './common/hooks';
import { KEYS_TEXT_CLASS } from './common/keys';
import type { TextElement, TextProps, TextRef } from './common/types';

const Text = forwardRef(function Text<Element extends TextElement>(
	props: TextProps<Element>,
	ref: TextRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_TEXT_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		align: alignProp = DEFAULT_TEXT_ALIGN,
		decoration: decorationProp = DEFAULT_TEXT_DECORATION,
		fontSize: fontSizeProp = DEFAULT_TEXT_FONT_SIZE,
		fontWeight: fontWeightProp = DEFAULT_TEXT_FONT_WEIGHT,
		letterSpacing: letterSpacingProp = DEFAULT_TEXT_LETTER_SPACING,
		lineClamp: lineClampProp = DEFAULT_TEXT_LINE_CLAMP,
		lineHeight: lineHeightProp = DEFAULT_TEXT_LINE_HEIGHT,
		textTransform: textTransformProp = DEFAULT_TEXT_TRANSFORM,
		isItalic: isItalicProp = DEFAULT_TEXT_IS_ITALIC,
		isOverflown: isOverflownProp = DEFAULT_TEXT_IS_OVERFLOWN,
		whiteSpace: whiteSpaceProp = DEFAULT_TEXT_WHITESPACE,
		wordBreak: wordBreakProp = DEFAULT_TEXT_WORD_BREAK,
		userSelect: userSelectProp = DEFAULT_TEXT_USER_SELECT,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const {
		align,
		decoration,
		fontSize,
		fontWeight,
		letterSpacing,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whiteSpace,
		wordBreak,
		userSelect
	} = useTextResponsiveValues<Element>({
		align: alignProp,
		decoration: decorationProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
		letterSpacing: letterSpacingProp,
		lineClamp: lineClampProp,
		lineHeight: lineHeightProp,
		textTransform: textTransformProp,
		isItalic: isItalicProp,
		isOverflown: isOverflownProp,
		whiteSpace: whiteSpaceProp,
		wordBreak: wordBreakProp,
		userSelect: userSelectProp
	});

	const classes = useTextClasses<Element>({
		color,
		colorMode,
		align,
		decoration,
		fontSize,
		fontWeight,
		letterSpacing,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whiteSpace,
		wordBreak,
		userSelect
	});
	const styles = useTextStyles<Element>({ color, decoration });

	return (
		<Box
			{...{ rest }}
			as={as}
			ref={ref}
			className={classNames(KEYS_TEXT_CLASS, classes, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

// Text.displayName = 'Text';

export default Text;
