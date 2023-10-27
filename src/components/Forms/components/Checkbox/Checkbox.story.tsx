import { type ReactElement, useState } from 'react';

import { Box } from '@components/Box';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_CHECKBOX_IS_ACTIVE__,
	__DEFAULT_CHECKBOX_IS_CHECKED__,
	__DEFAULT_CHECKBOX_IS_CLICKABLE__,
	__DEFAULT_CHECKBOX_IS_COMPACT__,
	__DEFAULT_CHECKBOX_IS_DISABLED__,
	__DEFAULT_CHECKBOX_IS_ERROR__,
	__DEFAULT_CHECKBOX_IS_FOCUSED__,
	__DEFAULT_CHECKBOX_IS_INDETERMINATE__,
	__DEFAULT_CHECKBOX_IS_OUTLINED__,
	__DEFAULT_CHECKBOX_IS_READONLY__,
	__DEFAULT_CHECKBOX_IS_REQUIRED__,
	__DEFAULT_CHECKBOX_IS_SUCCESS__,
	__DEFAULT_CHECKBOX_IS_WARNING__,
	__DEFAULT_CHECKBOX_LABEL_POSITION__,
	__DEFAULT_CHECKBOX_SIZE__,
	__DEFAULT_CHECKBOX_VARIANT__
} from './common/constants';
import type {
	CheckboxDefaultElement,
	CheckboxLabelPosition,
	CheckboxProps,
	CheckboxSize,
	CheckboxVariant
} from './common/types';
import type { CheckboxStory, CheckboxStoryMeta } from './common/types/story';
import { Checkbox as CheckboxComponent } from '.';

export default {
	title: 'Forms/Checkbox',
	component: CheckboxComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_ACTIVE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isChecked: {
			name: 'Checked',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_CHECKED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_CLICKABLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_ERROR__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_INDETERMINATE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isIndeterminate: {
			name: 'Indeterminate',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_FOCUSED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_READONLY__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_REQUIRED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_SUCCESS__,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: __DEFAULT_CHECKBOX_IS_WARNING__,
			// description: '',
			control: { type: 'boolean' }
		},
		labelPosition: {
			name: 'Label Position',
			type: 'string',
			defaultValue: __DEFAULT_CHECKBOX_LABEL_POSITION__,
			// description: '',
			options: ['left', 'right'] as Array<CheckboxLabelPosition>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_CHECKBOX_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<CheckboxSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_CHECKBOX_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'transparent'] as Array<CheckboxVariant>,
			control: { type: 'radio' }
		}
	}
} as CheckboxStoryMeta;

export const Checkbox: CheckboxStory = (props: CheckboxProps<CheckboxDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Box w='fit-content' h='fit-content'>
			<CheckboxComponent
				{...props}
				renderLabel={(props) => <Text {...props}>Label</Text>}
				color={color}
				colorMode={colorMode}
			/>
		</Box>
	);
};
