import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement, ThemeRadiusArr } from '@common/types';

import { Center } from '@components/Layout';

import { __DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE__, __DEFAULT_THREE_DOTS_SPINNER_SIZE__ } from './common/constants';
import type { ThreeDotsSpinnerProps, ThreeDotsSpinnerSize } from './common/types';
import type { ThreeDotsSpinnerStory, ThreeDotsSpinnerStoryMeta } from './common/types/story';
import { ThreeDotsSpinner as ThreeDotsSpinnerComponent } from '.';
import { __DEFAULT_RADIUS__ } from '@common/constants';

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
			defaultValue: __DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_THREE_DOTS_SPINNER_SIZE__,
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
): ReactElement => (
	<Center w='auto'>
		<ThreeDotsSpinnerComponent {...props} />
	</Center>
);
