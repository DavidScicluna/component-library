import { Box } from '../../../Box';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_CHECKBOX_IS_ACTIVE,
	DEFAULT_CHECKBOX_IS_CHECKED,
	DEFAULT_CHECKBOX_IS_CLICKABLE,
	DEFAULT_CHECKBOX_IS_COMPACT,
	DEFAULT_CHECKBOX_IS_DISABLED,
	DEFAULT_CHECKBOX_IS_ERROR,
	DEFAULT_CHECKBOX_IS_FOCUSED,
	DEFAULT_CHECKBOX_IS_INDETERMINATE,
	DEFAULT_CHECKBOX_IS_OUTLINED,
	DEFAULT_CHECKBOX_IS_READONLY,
	DEFAULT_CHECKBOX_IS_REQUIRED,
	DEFAULT_CHECKBOX_IS_SUCCESS,
	DEFAULT_CHECKBOX_IS_WARNING,
	DEFAULT_CHECKBOX_LABEL_POSITION,
	DEFAULT_CHECKBOX_SIZE
} from './common/constants';
import type { CheckboxLabelPosition, CheckboxProps, CheckboxSize } from './common/types';
import type { CheckboxStory, CheckboxStoryMeta } from './common/types/story';
import { Checkbox as CheckboxComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Forms/Checkbox',
	component: CheckboxComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isChecked: {
			name: 'Checked',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_CHECKED,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_CLICKABLE,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isIndeterminate: {
			name: 'Indeterminate',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_INDETERMINATE,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_CHECKBOX_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		labelPosition: {
			name: 'Label Position',
			type: 'string',
			defaultValue: DEFAULT_CHECKBOX_LABEL_POSITION,
			// description: '',
			options: ['left', 'right'] as Array<CheckboxLabelPosition>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_CHECKBOX_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<CheckboxSize>,
			control: { type: 'radio' }
		}
	}
} as CheckboxStoryMeta;

export const Checkbox: CheckboxStory = (props: CheckboxProps<PolymorphicDefaultElement>): JSX.Element => {
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
