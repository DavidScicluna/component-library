import { useState } from 'react';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	__DEFAULT_TEXT_INPUT_IS_COMPACT__,
	__DEFAULT_TEXT_INPUT_IS_DISABLED__,
	__DEFAULT_TEXT_INPUT_IS_ERROR__,
	__DEFAULT_TEXT_INPUT_IS_FOCUSED__,
	__DEFAULT_TEXT_INPUT_IS_OUTLINED__,
	__DEFAULT_TEXT_INPUT_IS_READONLY__,
	__DEFAULT_TEXT_INPUT_IS_REQUIRED__,
	__DEFAULT_TEXT_INPUT_IS_SUCCESS__,
	__DEFAULT_TEXT_INPUT_IS_WARNING__,
	__DEFAULT_TEXT_INPUT_SIZE__,
	__DEFAULT_TEXT_INPUT_VARIANT__
} from './common/constants';
import type { TextInputDefaultElement, TextInputProps, TextInputSize, TextInputVariant } from './common/types';
import type { TextInputStory, TextInputStoryMeta } from './common/types/story';
import { TextInput as TextInputComponent } from '.';

export default {
	title: 'Forms/TextInput',
	component: TextInputComponent,
	argTypes: {
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_ERROR__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_FOCUSED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_READONLY__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_REQUIRED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_SUCCESS__,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXT_INPUT_IS_WARNING__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_TEXT_INPUT_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<TextInputSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_TEXT_INPUT_VARIANT__,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<TextInputVariant>,
			control: { type: 'radio' }
		}
	}
} as TextInputStoryMeta;

export const TextInput: TextInputStory = (props: TextInputProps<TextInputDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<string>('');

	return (
		<TextInputComponent
			{...props}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			onChange={(e) => setValue(e.target.value)}
			placeholder='Placeholder'
			value={value}
		/>
	);
};
