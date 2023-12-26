import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement, ThemeRadiusArr } from '@common/types';

import { Center } from '@components/Layout';

import { __DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE__, __DEFAULT_TAIL_SPIN_SPINNER_SIZE__ } from './common/constants';
import type { TailSpinSpinnerProps, TailSpinSpinnerSize } from './common/types';
import type { TailSpinSpinnerStory, TailSpinSpinnerStoryMeta } from './common/types/story';
import { TailSpinSpinner as TailSpinSpinnerComponent } from '.';
import { __DEFAULT_RADIUS__ } from '@common/constants';

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
			defaultValue: __DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE__,
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
			defaultValue: __DEFAULT_TAIL_SPIN_SPINNER_SIZE__,
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
): ReactElement => (
	<Center w='auto'>
		<TailSpinSpinnerComponent {...props} />
	</Center>
);