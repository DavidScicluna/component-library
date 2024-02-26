import { useState } from 'react';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_EMAIL_INPUT_IS_COMPACT,
	DEFAULT_EMAIL_INPUT_IS_DISABLED,
	DEFAULT_EMAIL_INPUT_IS_ERROR,
	DEFAULT_EMAIL_INPUT_IS_FOCUSED,
	DEFAULT_EMAIL_INPUT_IS_OUTLINED,
	DEFAULT_EMAIL_INPUT_IS_READONLY,
	DEFAULT_EMAIL_INPUT_IS_REQUIRED,
	DEFAULT_EMAIL_INPUT_IS_SUCCESS,
	DEFAULT_EMAIL_INPUT_IS_WARNING,
	DEFAULT_EMAIL_INPUT_SIZE,
	DEFAULT_EMAIL_INPUT_VARIANT
} from './common/constants';
import type { EmailInputDefaultElement, EmailInputProps, EmailInputSize, EmailInputVariant } from './common/types';
import type { EmailInputStory, EmailInputStoryMeta } from './common/types/story';
import { EmailInput as EmailInputComponent } from '.';

export default {
	title: 'Forms/EmailInput',
	component: EmailInputComponent,
	argTypes: {
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_EMAIL_INPUT_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_EMAIL_INPUT_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<EmailInputSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_EMAIL_INPUT_VARIANT,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<EmailInputVariant>,
			control: { type: 'radio' }
		}
	}
} as EmailInputStoryMeta;

export const EmailInput: EmailInputStory = (props: EmailInputProps<EmailInputDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<string>('');

	return (
		<EmailInputComponent
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
