import { __DEFAULT_RADIUS__ } from '../../../../common/constants';
import type { ThemeRadiusArr } from '../../../../common/types';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	__DEFAULT_PROGRESS_IS_INDETERMINATE__,
	__DEFAULT_PROGRESS_MAX__,
	__DEFAULT_PROGRESS_MIN__,
	__DEFAULT_PROGRESS_VALUE__,
	__DEFAULT_PROGRESS_VARIANT__
} from './common/constants';
import type { ProgressDefaultElement, ProgressProps, ProgressVariant } from './common/types';
import type { ProgressStory, ProgressStoryMeta } from './common/types/story';
import { Progress as ProgressComponent } from '.';

export default {
	title: 'Feedback/Progress',
	component: ProgressComponent,
	argTypes: {
		isIndeterminate: {
			name: 'Indeterminate',
			type: 'boolean',
			defaultValue: __DEFAULT_PROGRESS_IS_INDETERMINATE__,
			// description: '',
			control: { type: 'boolean' }
		},
		max: {
			name: 'Max',
			type: 'number',
			defaultValue: __DEFAULT_PROGRESS_MAX__,
			// description: '',
			control: { type: 'number' }
		},
		min: {
			name: 'Min',
			type: 'number',
			defaultValue: __DEFAULT_PROGRESS_MIN__,
			// description: '',
			control: { type: 'number' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		value: {
			name: 'Value',
			type: 'number',
			defaultValue: __DEFAULT_PROGRESS_VALUE__,
			// description: '',
			control: { type: 'number' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_PROGRESS_VARIANT__,
			// description: '',
			options: ['horizontal', 'vertical'] as Array<ProgressVariant>,
			control: { type: 'radio' }
		}
	}
} as ProgressStoryMeta;

export const Progress: ProgressStory = (props: ProgressProps<ProgressDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<ProgressComponent
			{...props}
			color={color}
			colorMode={colorMode}
			w={props.variant === 'horizontal' ? '100%' : '24px'}
			h={props.variant === 'horizontal' ? '24px' : '500px'}
		/>
	);
};
