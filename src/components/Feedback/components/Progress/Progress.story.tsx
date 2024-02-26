import { DEFAULT_RADIUS } from '../../../../common/constants';
import type { ThemeRadiusArr } from '../../../../common/types';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_PROGRESS_IS_INDETERMINATE,
	DEFAULT_PROGRESS_MAX,
	DEFAULT_PROGRESS_MIN,
	DEFAULT_PROGRESS_VALUE,
	DEFAULT_PROGRESS_VARIANT
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
			defaultValue: DEFAULT_PROGRESS_IS_INDETERMINATE,
			// description: '',
			control: { type: 'boolean' }
		},
		max: {
			name: 'Max',
			type: 'number',
			defaultValue: DEFAULT_PROGRESS_MAX,
			// description: '',
			control: { type: 'number' }
		},
		min: {
			name: 'Min',
			type: 'number',
			defaultValue: DEFAULT_PROGRESS_MIN,
			// description: '',
			control: { type: 'number' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		value: {
			name: 'Value',
			type: 'number',
			defaultValue: DEFAULT_PROGRESS_VALUE,
			// description: '',
			control: { type: 'number' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_PROGRESS_VARIANT,
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
