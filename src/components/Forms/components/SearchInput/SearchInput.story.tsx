import { useState } from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_SEARCH_INPUT_IS_COMPACT,
	DEFAULT_SEARCH_INPUT_IS_DISABLED,
	DEFAULT_SEARCH_INPUT_IS_ERROR,
	DEFAULT_SEARCH_INPUT_IS_FOCUSED,
	DEFAULT_SEARCH_INPUT_IS_OUTLINED,
	DEFAULT_SEARCH_INPUT_IS_READONLY,
	DEFAULT_SEARCH_INPUT_IS_REQUIRED,
	DEFAULT_SEARCH_INPUT_IS_SUCCESS,
	DEFAULT_SEARCH_INPUT_IS_WARNING,
	DEFAULT_SEARCH_INPUT_SIZE,
	DEFAULT_SEARCH_INPUT_VARIANT
} from './common/constants';
import type { SearchInputDefaultElement, SearchInputProps, SearchInputSize, SearchInputVariant } from './common/types';
import type { SearchInputStory, SearchInputStoryMeta } from './common/types/story';
import { SearchInput as SearchInputComponent } from '.';

export default {
	title: 'Forms/SearchInput',
	component: SearchInputComponent,
	argTypes: {
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_SEARCH_INPUT_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_SEARCH_INPUT_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<SearchInputSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_SEARCH_INPUT_VARIANT,
			// description: '',
			options: ['outlined', 'underline', 'unstyled'] as Array<SearchInputVariant>,
			control: { type: 'radio' }
		}
	}
} as SearchInputStoryMeta;

export const SearchInput: SearchInputStory = (props: SearchInputProps<SearchInputDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<string>('');

	return (
		<SearchInputComponent
			{...props}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			onFilter={(query) => setValue(query)}
			placeholder='Placeholder'
			initialQuery={value}
		/>
	);
};
