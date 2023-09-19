import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import { Box } from '@components/Box';

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
import { useTextClasses } from './common/hooks';
import { __KEYS_TEXT_CLASS__ } from './common/keys';
import type { TextDefaultElement, TextElement, TextProps, TextRef } from './common/types';

const Text = forwardRef(function Text<Element extends TextElement = TextDefaultElement>(
	props: TextProps<Element>,
	ref: TextRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = __DEFAULT_TEXT_ALIGN__,
		color,
		fontSize = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight = __DEFAULT_TEXT_FONT_WEIGHT__,
		lineClamp,
		lineHeight = __DEFAULT_TEXT_LINE_HEIGHT__,
		textTransform = __DEFAULT_TEXT_TRANSFORM__,
		isItalic: italic = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown: overflown = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whitespace = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak = __DEFAULT_TEXT_WORD_BREAK__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const isItalic = useGetResponsiveValue<boolean>(italic);
	const isOverflown = useGetResponsiveValue<boolean>(overflown);

	const classes = useTextClasses<Element>({
		align,
		color,
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

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_TEXT_CLASS__, classes, { [className]: !!className })}
			sx={color.includes('#') ? merge({ color }, sx) : sx}
		>
			{children}
		</Box>
	);
});

Text.displayName = 'Text';

export default Text;
