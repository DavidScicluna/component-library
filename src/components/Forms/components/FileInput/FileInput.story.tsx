import { useState } from 'react';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_FILE_INPUT_IS_COMPACT,
	DEFAULT_FILE_INPUT_IS_DISABLED,
	DEFAULT_FILE_INPUT_IS_ERROR,
	DEFAULT_FILE_INPUT_IS_FOCUSED,
	DEFAULT_FILE_INPUT_IS_OUTLINED,
	DEFAULT_FILE_INPUT_IS_READONLY,
	DEFAULT_FILE_INPUT_IS_REQUIRED,
	DEFAULT_FILE_INPUT_IS_SUCCESS,
	DEFAULT_FILE_INPUT_IS_WARNING,
	DEFAULT_FILE_INPUT_SIZE,
	DEFAULT_FILE_INPUT_VARIANT
} from './common/constants';
import type { FileInputDefaultElement, FileInputProps, FileInputSize, FileInputVariant } from './common/types';
import type { FileInputStory, FileInputStoryMeta } from './common/types/story';
import { FileInput as FileInputComponent } from '.';

export default {
	title: 'Forms/FileInput',
	component: FileInputComponent,
	argTypes: {
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_INPUT_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_FILE_INPUT_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<FileInputSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_FILE_INPUT_VARIANT,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<FileInputVariant>,
			control: { type: 'radio' }
		}
	}
} as FileInputStoryMeta;

export const FileInput: FileInputStory = (props: FileInputProps<FileInputDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<string>('');

	return (
		<FileInputComponent
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
