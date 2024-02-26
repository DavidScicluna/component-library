import { useState } from 'react';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_NUMBER_INPUT_IS_COMPACT,
	DEFAULT_NUMBER_INPUT_IS_DISABLED,
	DEFAULT_NUMBER_INPUT_IS_ERROR,
	DEFAULT_NUMBER_INPUT_IS_FOCUSED,
	DEFAULT_NUMBER_INPUT_IS_OUTLINED,
	DEFAULT_NUMBER_INPUT_IS_READONLY,
	DEFAULT_NUMBER_INPUT_IS_REQUIRED,
	DEFAULT_NUMBER_INPUT_IS_SUCCESS,
	DEFAULT_NUMBER_INPUT_IS_WARNING,
	DEFAULT_NUMBER_INPUT_SIZE,
	DEFAULT_NUMBER_INPUT_VARIANT
} from './common/constants';
import type { NumberInputDefaultElement, NumberInputProps, NumberInputSize, NumberInputVariant } from './common/types';
import type { NumberInputStory, NumberInputStoryMeta } from './common/types/story';
import { NumberInput as NumberInputComponent } from '.';

export default {
	title: 'Forms/NumberInput',
	component: NumberInputComponent,
	argTypes: {
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_NUMBER_INPUT_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_NUMBER_INPUT_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<NumberInputSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_NUMBER_INPUT_VARIANT,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<NumberInputVariant>,
			control: { type: 'radio' }
		}
	}
} as NumberInputStoryMeta;

export const NumberInput: NumberInputStory = (props: NumberInputProps<NumberInputDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<number>(0);

	return (
		<NumberInputComponent
			{...props}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			onChange={(e) => setValue(Number(e.target.value))}
			placeholder='Placeholder'
			value={value}
		/>
	);
};
