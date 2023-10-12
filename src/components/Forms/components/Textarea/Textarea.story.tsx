import { type ReactElement, useState } from 'react';

import type { ResizeClassArr } from '@common/types';

import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_TEXTAREA_IS_DISABLED__,
	__DEFAULT_TEXTAREA_IS_ERROR__,
	__DEFAULT_TEXTAREA_IS_FOCUSED__,
	__DEFAULT_TEXTAREA_IS_OUTLINED__,
	__DEFAULT_TEXTAREA_IS_READONLY__,
	__DEFAULT_TEXTAREA_IS_REQUIRED__,
	__DEFAULT_TEXTAREA_IS_SUCCESS__,
	__DEFAULT_TEXTAREA_IS_WARNING__,
	__DEFAULT_TEXTAREA_RESIZE__,
	__DEFAULT_TEXTAREA_SIZE__,
	__DEFAULT_TEXTAREA_VARIANT__
} from './common/constants';
import type { TextareaDefaultElement, TextareaProps, TextareaSize, TextareaVariant } from './common/types';
import type { TextareaStory, TextareaStoryMeta } from './common/types/story';
import { Textarea as TextareaComponent } from '.';

export default {
	title: 'Forms/Textarea',
	component: TextareaComponent,
	argTypes: {
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_ERROR__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_FOCUSED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_READONLY__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_REQUIRED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_SUCCESS__,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: __DEFAULT_TEXTAREA_IS_WARNING__,
			// description: '',
			control: { type: 'boolean' }
		},
		resize: {
			name: 'Resize',
			type: 'string',
			defaultValue: __DEFAULT_TEXTAREA_RESIZE__,
			// description: '',
			options: ['none', 'y', 'x', 'both'] as ResizeClassArr,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_TEXTAREA_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<TextareaSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_TEXTAREA_VARIANT__,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<TextareaVariant>,
			control: { type: 'radio' }
		}
	}
} as TextareaStoryMeta;

export const Textarea: TextareaStory = (props: TextareaProps<TextareaDefaultElement>): ReactElement => {
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
			rows='5'
			cols='1'
			type='text'
			onChange={(e) => setValue(e.target.value)}
			placeholder='Placeholder'
			value={value}
		/>
	);
};
