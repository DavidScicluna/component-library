import { Box } from '../../../Box';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_RADIO_IS_ACTIVE,
	DEFAULT_RADIO_IS_CHECKED,
	DEFAULT_RADIO_IS_CLICKABLE,
	DEFAULT_RADIO_IS_COMPACT,
	DEFAULT_RADIO_IS_DISABLED,
	DEFAULT_RADIO_IS_ERROR,
	DEFAULT_RADIO_IS_FOCUSED,
	DEFAULT_RADIO_IS_OUTLINED,
	DEFAULT_RADIO_IS_READONLY,
	DEFAULT_RADIO_IS_REQUIRED,
	DEFAULT_RADIO_IS_SUCCESS,
	DEFAULT_RADIO_IS_WARNING,
	DEFAULT_RADIO_LABEL_POSITION,
	DEFAULT_RADIO_SIZE
} from './common/constants';
import type { RadioLabelPosition, RadioProps, RadioSize } from './common/types';
import type { RadioStory, RadioStoryMeta } from './common/types/story';
import { Radio as RadioComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Forms/Radio',
	component: RadioComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isChecked: {
			name: 'Checked',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_CHECKED,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_CLICKABLE,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_RADIO_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		labelPosition: {
			name: 'Label Position',
			type: 'string',
			defaultValue: DEFAULT_RADIO_LABEL_POSITION,
			// description: '',
			options: ['left', 'right'] as Array<RadioLabelPosition>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_RADIO_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<RadioSize>,
			control: { type: 'radio' }
		}
	}
} as RadioStoryMeta;

export const Radio: RadioStory = (props: RadioProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Box w='fit-content' h='fit-content'>
			<RadioComponent
				{...props}
				renderLabel={(props) => <Text {...props}>Label</Text>}
				color={color}
				colorMode={colorMode}
			/>
		</Box>
	);
};
