import type { PolymorphicDefaultElement, ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';
import React from 'react';
import { DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE, DEFAULT_THREE_DOTS_SPINNER_SIZE } from './common/constants';
import type { ThreeDotsSpinnerProps, ThreeDotsSpinnerSize } from './common/types';
import type { ThreeDotsSpinnerStory, ThreeDotsSpinnerStoryMeta } from './common/types/story';
import { ThreeDotsSpinner as ThreeDotsSpinnerComponent } from '.';
import { DEFAULT_RADIUS } from '../../../../common/constants';

export default {
	title: 'Feedback/ThreeDotsSpinner',
	component: ThreeDotsSpinnerComponent,
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
			defaultValue: DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE,
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
			defaultValue: DEFAULT_THREE_DOTS_SPINNER_SIZE,
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
			] as Array<ThreeDotsSpinnerSize>,
			control: { type: 'radio' }
		}
	}
} as ThreeDotsSpinnerStoryMeta;

export const ThreeDotsSpinner: ThreeDotsSpinnerStory = (
	props: ThreeDotsSpinnerProps<PolymorphicDefaultElement>
): JSX.Element => (
	<Center w='auto'>
		<ThreeDotsSpinnerComponent {...props} />
	</Center>
);
