import { useState } from 'react';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	__DEFAULT_RATING_COUNT__,
	__DEFAULT_RATING_DIRECTION__,
	__DEFAULT_RATING_HIGHLIGHT_MODE__,
	__DEFAULT_RATING_IS_DISABLED__,
	__DEFAULT_RATING_IS_ERROR__,
	__DEFAULT_RATING_IS_READONLY__,
	__DEFAULT_RATING_IS_REQUIRED__,
	__DEFAULT_RATING_IS_SUCCESS__,
	__DEFAULT_RATING_IS_WARNING__,
	__DEFAULT_RATING_SIZE__
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
			defaultValue: __DEFAULT_RATING_COUNT__,
			// description: '',
			control: { type: 'number' }
		},
		direction: {
			name: 'Direction',
			type: 'string',
			defaultValue: __DEFAULT_RATING_DIRECTION__,
			// description: '',
			options: ['horizontal', 'vertical'] as Array<RatingDirection>,
			control: { type: 'radio' }
		},
		highlightMode: {
			name: 'Highlight Mode',
			type: 'string',
			defaultValue: __DEFAULT_RATING_HIGHLIGHT_MODE__,
			// description: '',
			options: ['trailing', 'single'] as Array<RatingHighlightMode>,
			control: { type: 'radio' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_RATING_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: __DEFAULT_RATING_IS_ERROR__,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: __DEFAULT_RATING_IS_READONLY__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: __DEFAULT_RATING_IS_REQUIRED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: __DEFAULT_RATING_IS_SUCCESS__,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: __DEFAULT_RATING_IS_WARNING__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_RATING_SIZE__,
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
