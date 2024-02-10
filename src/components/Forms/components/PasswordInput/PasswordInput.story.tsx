import { useState } from 'react';

import { IconButton, IconButtonIcon } from '@components/Buttons';
import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_PASSWORD_INPUT_IS_COMPACT__,
	__DEFAULT_PASSWORD_INPUT_IS_DISABLED__,
	__DEFAULT_PASSWORD_INPUT_IS_ERROR__,
	__DEFAULT_PASSWORD_INPUT_IS_FOCUSED__,
	__DEFAULT_PASSWORD_INPUT_IS_OUTLINED__,
	__DEFAULT_PASSWORD_INPUT_IS_READONLY__,
	__DEFAULT_PASSWORD_INPUT_IS_REQUIRED__,
	__DEFAULT_PASSWORD_INPUT_IS_SUCCESS__,
	__DEFAULT_PASSWORD_INPUT_IS_WARNING__,
	__DEFAULT_PASSWORD_INPUT_SIZE__,
	__DEFAULT_PASSWORD_INPUT_VARIANT__
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
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_ERROR__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_FOCUSED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_READONLY__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_REQUIRED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_SUCCESS__,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: __DEFAULT_PASSWORD_INPUT_IS_WARNING__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_PASSWORD_INPUT_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<PasswordInputSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_PASSWORD_INPUT_VARIANT__,
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
