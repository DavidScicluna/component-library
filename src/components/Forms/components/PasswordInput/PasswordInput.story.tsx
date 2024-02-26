import { useState } from 'react';

import { IconButton, IconButtonIcon } from '../../../Buttons';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_PASSWORD_INPUT_IS_COMPACT,
	DEFAULT_PASSWORD_INPUT_IS_DISABLED,
	DEFAULT_PASSWORD_INPUT_IS_ERROR,
	DEFAULT_PASSWORD_INPUT_IS_FOCUSED,
	DEFAULT_PASSWORD_INPUT_IS_OUTLINED,
	DEFAULT_PASSWORD_INPUT_IS_READONLY,
	DEFAULT_PASSWORD_INPUT_IS_REQUIRED,
	DEFAULT_PASSWORD_INPUT_IS_SUCCESS,
	DEFAULT_PASSWORD_INPUT_IS_WARNING,
	DEFAULT_PASSWORD_INPUT_SIZE,
	DEFAULT_PASSWORD_INPUT_VARIANT
} from './common/constants';
import type {
	PasswordInputDefaultElement,
	PasswordInputProps,
	PasswordInputSize,
	PasswordInputVariant
} from './common/types';
import type { PasswordInputStory, PasswordInputStoryMeta } from './common/types/story';
import { PasswordInput as PasswordInputComponent } from '.';

export default {
	title: 'Forms/PasswordInput',
	component: PasswordInputComponent,
	argTypes: {
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_PASSWORD_INPUT_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_PASSWORD_INPUT_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<PasswordInputSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_PASSWORD_INPUT_VARIANT,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<PasswordInputVariant>,
			control: { type: 'radio' }
		}
	}
} as PasswordInputStoryMeta;

export const PasswordInput: PasswordInputStory = (
	props: PasswordInputProps<PasswordInputDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<string>('');

	return (
		<PasswordInputComponent
			{...props}
			renderToggle={({ isVisible, ...rest }) => (
				<IconButton {...rest} color={undefined}>
					<IconButtonIcon icon={isVisible ? 'visibility_off' : 'visibility'} category='filled' />
				</IconButton>
			)}
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
