import type { ReactElement } from 'react';

import type { TextLineClampArr } from '@common/types/classes';
import type {
	FontSizesArr,
	FontWeightsArr,
	LineHeightsArr,
	TextAlignsArr,
	TextTransformsArr,
	WhitespacesArr,
	WordBreaksArr
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
			defaultValue: __DEFAULT_TEXT_ALIGN__,
			// description: '',
			options: ['left', 'center', 'right', 'justify', 'start', 'end'] as TextAlignsArr,
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
			defaultValue: __DEFAULT_TEXT_FONT_SIZE__,
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
			] as FontSizesArr,
			control: { type: 'radio' }
		},
		fontWeight: {
			name: 'Font Weight',
			type: 'string',
			defaultValue: __DEFAULT_TEXT_FONT_WEIGHT__,
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
			] as FontWeightsArr,
			control: { type: 'radio' }
		},
		lineClamp: {
			name: 'Line Clamp',
			type: 'string',
			// description: '',
			options: ['none', 1, 2, 3, 4, 5, 6] as TextLineClampArr,
			control: { type: 'radio' }
		},
		lineHeight: {
			name: 'Line Height',
			type: 'string',
			defaultValue: __DEFAULT_TEXT_LINE_HEIGHT__,
			// description: '',
			options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', 3, 4, 5, 6, 7, 8, 9, 10] as LineHeightsArr,
			control: { type: 'radio' }
		},
		textTransform: {
			name: 'Text Transform',
			type: 'string',
			defaultValue: __DEFAULT_TEXT_TRANSFORM__,
			// description: '',
			options: ['uppercase', 'lowercase', 'capitalize', 'normal'] as TextTransformsArr,
			control: { type: 'radio' }
		},
		isItalic: {
			name: 'Italic',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_IS_ITALIC__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOverflown: {
			name: 'Overflown',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_IS_OVERFLOWN__,
			// description: '',
			control: { type: 'boolean' }
		},
		whitespace: {
			name: 'Whitespace',
			type: 'string',
			defaultValue: __DEFAULT_TEXT_WHITESPACE__,
			// description: '',
			options: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] as WhitespacesArr,
			control: { type: 'radio' }
		},
		wordBreak: {
			name: 'Word Break',
			type: 'string',
			defaultValue: __DEFAULT_TEXT_WORD_BREAK__,
			// description: '',
			options: ['normal', 'words', 'all', 'keep'] as WordBreaksArr,
			control: { type: 'radio' }
		}
	}
} as TextStoryMeta;

export const Text: TextStory = (props: TextProps<TextDefaultElement>): ReactElement => {
	return <TextComponent {...props} />;
};
