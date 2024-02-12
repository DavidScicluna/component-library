import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_TEXT_ALIGN__,
	__DEFAULT_TEXT_AS__,
	__DEFAULT_TEXT_FONT_SIZE__,
	__DEFAULT_TEXT_FONT_WEIGHT__,
	__DEFAULT_TEXT_IS_ITALIC__,
	__DEFAULT_TEXT_IS_OVERFLOWN__,
	__DEFAULT_TEXT_LINE_CLAMP__,
	__DEFAULT_TEXT_LINE_HEIGHT__,
	__DEFAULT_TEXT_TRANSFORM__,
	__DEFAULT_TEXT_USER_SELECT__,
	__DEFAULT_TEXT_WHITESPACE__,
	__DEFAULT_TEXT_WORD_BREAK__
} from './common/constants';
import { useTextClasses, useTextResponsiveValues, useTextStyles } from './common/hooks';
import { __KEYS_TEXT_CLASS__ } from './common/keys';
import type { TextElement, TextProps, TextRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Text = forwardRef(function Text<Element extends TextElement>(
	props: TextProps<Element>,
	ref: TextRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_TEXT_AS__,
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
		whiteSpace: whiteSpaceProp = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak: wordBreakProp = __DEFAULT_TEXT_WORD_BREAK__,
		userSelect: userSelectProp = __DEFAULT_TEXT_USER_SELECT__,
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
		whiteSpace,
		wordBreak,
		userSelect
	} = useTextResponsiveValues<Element>({
		align: alignProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
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
		fontSize,
		fontWeight,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whiteSpace,
		wordBreak,
		userSelect
	});
	const styles = useTextStyles<Element>({ color });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			as={as}
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
