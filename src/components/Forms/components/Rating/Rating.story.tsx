import { useState } from 'react';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_RATING_COUNT,
	DEFAULT_RATING_DIRECTION,
	DEFAULT_RATING_HIGHLIGHT_MODE,
	DEFAULT_RATING_IS_DISABLED,
	DEFAULT_RATING_IS_ERROR,
	DEFAULT_RATING_IS_READONLY,
	DEFAULT_RATING_IS_REQUIRED,
	DEFAULT_RATING_IS_SUCCESS,
	DEFAULT_RATING_IS_WARNING,
	DEFAULT_RATING_SIZE
} from './common/constants';
import type { RatingDirection, RatingHighlightMode, RatingProps, RatingSize } from './common/types';
import type { RatingStory, RatingStoryMeta } from './common/types/story';
import { Rating as RatingComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Forms/Rating',
	component: RatingComponent,
	argTypes: {
		count: {
			name: 'Count',
			type: 'number',
			defaultValue: DEFAULT_RATING_COUNT,
			// description: '',
			control: { type: 'number' }
		},
		direction: {
			name: 'Direction',
			type: 'string',
			defaultValue: DEFAULT_RATING_DIRECTION,
			// description: '',
			options: ['horizontal', 'vertical'] as Array<RatingDirection>,
			control: { type: 'radio' }
		},
		highlightMode: {
			name: 'Highlight Mode',
			type: 'string',
			defaultValue: DEFAULT_RATING_HIGHLIGHT_MODE,
			// description: '',
			options: ['trailing', 'single'] as Array<RatingHighlightMode>,
			control: { type: 'radio' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_RATING_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_RATING_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_RATING_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_RATING_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_RATING_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_RATING_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_RATING_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<RatingSize>,
			control: { type: 'radio' }
		}
	}
} as RatingStoryMeta;

export const Rating: RatingStory = (props: RatingProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [value, setValue] = useState<number>(0);

	return (
		<RatingComponent
			{...props}
			color={color}
			colorMode={colorMode}
			onChange={(value) => setValue(value)}
			value={value}
		/>
	);
};
