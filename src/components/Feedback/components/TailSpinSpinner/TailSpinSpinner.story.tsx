import type { PolymorphicDefaultElement, ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';
import React from 'react';
import { DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE, DEFAULT_TAIL_SPIN_SPINNER_SIZE } from './common/constants';
import type { TailSpinSpinnerProps, TailSpinSpinnerSize } from './common/types';
import type { TailSpinSpinnerStory, TailSpinSpinnerStoryMeta } from './common/types/story';
import { TailSpinSpinner as TailSpinSpinnerComponent } from '.';
import { DEFAULT_RADIUS } from '../../../../common/constants';

export default {
	title: 'Feedback/TailSpinSpinner',
	component: TailSpinSpinnerComponent,
	argTypes: {
		color: {
			name: 'Color',
			type: 'string',
			// description: '',
			control: { type: 'color' }
		},
		isVisible: {
			name: 'Visible',
			type: 'boolean',
			defaultValue: DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_TAIL_SPIN_SPINNER_SIZE,
			// description: '',
			options: [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl'
			] as Array<TailSpinSpinnerSize>,
			control: { type: 'radio' }
		}
	}
} as TailSpinSpinnerStoryMeta;

export const TailSpinSpinner: TailSpinSpinnerStory = (
	props: TailSpinSpinnerProps<PolymorphicDefaultElement>
): JSX.Element => (
	<Center w='auto'>
		<TailSpinSpinnerComponent {...props} />
	</Center>
);
