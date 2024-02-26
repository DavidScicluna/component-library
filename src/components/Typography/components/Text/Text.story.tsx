import React from 'react';
import type {
	TextAlignClassArr,
	TextLineClampClassArr,
	TextTransformClassArr,
	ThemeFontSizeArr,
	ThemeFontWeightArr,
	ThemeLineHeightArr,
	UserSelectClassArr,
	WhiteSpaceClassArr,
	WordBreakClassArr
} from '../../../../common/types';

import {
	DEFAULT_TEXT_ALIGN,
	DEFAULT_TEXT_FONT_SIZE,
	DEFAULT_TEXT_FONT_WEIGHT,
	DEFAULT_TEXT_IS_ITALIC,
	DEFAULT_TEXT_IS_OVERFLOWN,
	DEFAULT_TEXT_LINE_HEIGHT,
	DEFAULT_TEXT_TRANSFORM,
	DEFAULT_TEXT_USER_SELECT,
	DEFAULT_TEXT_WHITESPACE,
	DEFAULT_TEXT_WORD_BREAK
} from './common/constants';
import type { TextDefaultElement, TextProps } from './common/types';
import type { TextStory, TextStoryMeta } from './common/types/story';
import { Text as TextComponent } from '.';

export default {
	title: 'Typography/Text',
	component: TextComponent,
	argTypes: {
		children: {
			name: 'Text',
			type: 'string',
			defaultValue: 'Hello',
			// description: '',
			control: { type: 'text' }
		},
		align: {
			name: 'Align',
			type: 'string',
			defaultValue: DEFAULT_TEXT_ALIGN,
			// description: '',
			options: ['left', 'center', 'right', 'justify', 'start', 'end'] as TextAlignClassArr,
			control: { type: 'radio' }
		},
		color: {
			name: 'Color',
			type: 'string',
			// description: '',
			control: { type: 'color' }
		},
		fontSize: {
			name: 'Font Size',
			type: 'string',
			defaultValue: DEFAULT_TEXT_FONT_SIZE,
			// description: '',
			options: [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl'
			] as ThemeFontSizeArr,
			control: { type: 'radio' }
		},
		fontWeight: {
			name: 'Font Weight',
			type: 'string',
			defaultValue: DEFAULT_TEXT_FONT_WEIGHT,
			// description: '',
			options: [
				'thin',
				'extralight',
				'light',
				'normal',
				'medium',
				'semibold',
				'bold',
				'extrabold',
				'black'
			] as ThemeFontWeightArr,
			control: { type: 'radio' }
		},
		lineClamp: {
			name: 'Line Clamp',
			type: 'string',
			// description: '',
			options: ['none', 1, 2, 3, 4, 5, 6] as TextLineClampClassArr,
			control: { type: 'radio' }
		},
		lineHeight: {
			name: 'Line Height',
			type: 'string',
			defaultValue: DEFAULT_TEXT_LINE_HEIGHT,
			// description: '',
			options: [
				'none',
				'tight',
				'snug',
				'normal',
				'relaxed',
				'loose',
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10
			] as ThemeLineHeightArr,
			control: { type: 'radio' }
		},
		textTransform: {
			name: 'Text Transform',
			type: 'string',
			defaultValue: DEFAULT_TEXT_TRANSFORM,
			// description: '',
			options: ['uppercase', 'lowercase', 'capitalize', 'normal'] as TextTransformClassArr,
			control: { type: 'radio' }
		},
		isItalic: {
			name: 'Italic',
			type: 'boolean',
			defaultValue: DEFAULT_TEXT_IS_ITALIC,
			// description: '',
			control: { type: 'boolean' }
		},
		isOverflown: {
			name: 'Overflown',
			type: 'boolean',
			defaultValue: DEFAULT_TEXT_IS_OVERFLOWN,
			// description: '',
			control: { type: 'boolean' }
		},
		whiteSpace: {
			name: 'White Space',
			type: 'string',
			defaultValue: DEFAULT_TEXT_WHITESPACE,
			// description: '',
			options: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] as WhiteSpaceClassArr,
			control: { type: 'radio' }
		},
		wordBreak: {
			name: 'Word Break',
			type: 'string',
			defaultValue: DEFAULT_TEXT_WORD_BREAK,
			// description: '',
			options: ['normal', 'words', 'all', 'keep'] as WordBreakClassArr,
			control: { type: 'radio' }
		},
		userSelect: {
			name: 'User Select',
			type: 'string',
			defaultValue: DEFAULT_TEXT_USER_SELECT,
			// description: '',
			options: ['none', 'text', 'all', 'auto'] as UserSelectClassArr,
			control: { type: 'radio' }
		}
	}
} as TextStoryMeta;

export const Text: TextStory = (props: TextProps<TextDefaultElement>): JSX.Element => {
	return <TextComponent {...props} />;
};
