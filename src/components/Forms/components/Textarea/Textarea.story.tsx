import { useState } from 'react';

import type { ResizeClassArr } from '../../../../common/types';
import React from 'react';
import { Text } from '../../../Typography';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_TEXTAREA_IS_COMPACT,
	DEFAULT_TEXTAREA_IS_DISABLED,
	DEFAULT_TEXTAREA_IS_ERROR,
	DEFAULT_TEXTAREA_IS_FOCUSED,
	DEFAULT_TEXTAREA_IS_OUTLINED,
	DEFAULT_TEXTAREA_IS_READONLY,
	DEFAULT_TEXTAREA_IS_REQUIRED,
	DEFAULT_TEXTAREA_IS_SUCCESS,
	DEFAULT_TEXTAREA_IS_WARNING,
	DEFAULT_TEXTAREA_RESIZE,
	DEFAULT_TEXTAREA_SIZE,
	DEFAULT_TEXTAREA_VARIANT
} from './common/constants';
import type { TextareaDefaultElement, TextareaProps, TextareaSize, TextareaVariant } from './common/types';
import type { TextareaStory, TextareaStoryMeta } from './common/types/story';
import { Textarea as TextareaComponent } from '.';

export default {
	title: 'Forms/Textarea',
	component: TextareaComponent,
	argTypes: {
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_TEXTAREA_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		resize: {
			name: 'Resize',
			type: 'string',
			defaultValue: DEFAULT_TEXTAREA_RESIZE,
			// description: '',
			options: ['none', 'y', 'x', 'both'] as ResizeClassArr,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_TEXTAREA_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<TextareaSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_TEXTAREA_VARIANT,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<TextareaVariant>,
			control: { type: 'radio' }
		}
	}
} as TextareaStoryMeta;

export const Textarea: TextareaStory = (props: TextareaProps<TextareaDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<string>('');

	return (
		<TextareaComponent
			{...props}
			renderTotal={(props) => <Text {...props}>{`${value.length} / 250`}</Text>}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			rows={5}
			cols={1}
			onChange={(e) => setValue(e.target.value)}
			placeholder='Placeholder'
			value={value}
		/>
	);
};
