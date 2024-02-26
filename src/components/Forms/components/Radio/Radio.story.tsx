import { Box } from '../../../Box';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	__DEFAULT_RADIO_IS_ACTIVE__,
	__DEFAULT_RADIO_IS_CHECKED__,
	__DEFAULT_RADIO_IS_CLICKABLE__,
	__DEFAULT_RADIO_IS_COMPACT__,
	__DEFAULT_RADIO_IS_DISABLED__,
	__DEFAULT_RADIO_IS_ERROR__,
	__DEFAULT_RADIO_IS_FOCUSED__,
	__DEFAULT_RADIO_IS_OUTLINED__,
	__DEFAULT_RADIO_IS_READONLY__,
	__DEFAULT_RADIO_IS_REQUIRED__,
	__DEFAULT_RADIO_IS_SUCCESS__,
	__DEFAULT_RADIO_IS_WARNING__,
	__DEFAULT_RADIO_LABEL_POSITION__,
	__DEFAULT_RADIO_SIZE__
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
			defaultValue: __DEFAULT_RADIO_IS_ACTIVE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isChecked: {
			name: 'Checked',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_CHECKED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_CLICKABLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_ERROR__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_FOCUSED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_READONLY__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_REQUIRED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_SUCCESS__,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: __DEFAULT_RADIO_IS_WARNING__,
			// description: '',
			control: { type: 'boolean' }
		},
		labelPosition: {
			name: 'Label Position',
			type: 'string',
			defaultValue: __DEFAULT_RADIO_LABEL_POSITION__,
			// description: '',
			options: ['left', 'right'] as Array<RadioLabelPosition>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_RADIO_SIZE__,
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
