import { Box } from '../../../Box';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_SWITCH_HAS_IO_LABEL,
	DEFAULT_SWITCH_IS_ACTIVE,
	DEFAULT_SWITCH_IS_CHECKED,
	DEFAULT_SWITCH_IS_CLICKABLE,
	DEFAULT_SWITCH_IS_COMPACT,
	DEFAULT_SWITCH_IS_DISABLED,
	DEFAULT_SWITCH_IS_ERROR,
	DEFAULT_SWITCH_IS_FOCUSED,
	DEFAULT_SWITCH_IS_OUTLINED,
	DEFAULT_SWITCH_IS_READONLY,
	DEFAULT_SWITCH_IS_REQUIRED,
	DEFAULT_SWITCH_IS_SUCCESS,
	DEFAULT_SWITCH_IS_WARNING,
	DEFAULT_SWITCH_LABEL_POSITION,
	DEFAULT_SWITCH_SIZE
} from './common/constants';
import type { SwitchLabelPosition, SwitchProps, SwitchSize } from './common/types';
import type { SwitchStory, SwitchStoryMeta } from './common/types/story';
import { Switch as SwitchComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Forms/Switch',
	component: SwitchComponent,
	argTypes: {
		hasIOLabel: {
			name: 'Has IO Label',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_HAS_IO_LABEL,
			// description: '',
			control: { type: 'boolean' }
		},
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isChecked: {
			name: 'Checked',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_CHECKED,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_CLICKABLE,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_SWITCH_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		labelPosition: {
			name: 'Label Position',
			type: 'string',
			defaultValue: DEFAULT_SWITCH_LABEL_POSITION,
			// description: '',
			options: ['left', 'right'] as Array<SwitchLabelPosition>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_SWITCH_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<SwitchSize>,
			control: { type: 'radio' }
		}
	}
} as SwitchStoryMeta;

export const Switch: SwitchStory = (props: SwitchProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Box w='fit-content' h='fit-content'>
			<SwitchComponent
				{...props}
				renderLabel={(props) => <Text {...props}>Label</Text>}
				color={color}
				colorMode={colorMode}
			/>
		</Box>
	);
};
