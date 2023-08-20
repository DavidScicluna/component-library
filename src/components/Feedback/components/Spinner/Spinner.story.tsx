import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '@components/Layout';

import { __DEFAULT_SPINNER_SIZE__, __DEFAULT_SPINNER_VARIANT__ } from './common/constants';
import type { SpinnerProps, SpinnerSize, SpinnerVariant } from './common/types';
import type { SpinnerStory, SpinnerStoryMeta } from './common/types/story';
import { Spinner as SpinnerComponent } from '.';

export default {
	title: 'Feedback/Spinner',
	component: SpinnerComponent,
	argTypes: {
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_SPINNER_SIZE__,
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
			] as SpinnerSize[],
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_SPINNER_VARIANT__,
			// description: '',
			options: [
				'bars',
				'color_ring',
				'oval',
				'puff',
				'rings',
				'rotating_lines',
				'tail_spin',
				'three_dots'
			] as SpinnerVariant[],
			control: { type: 'radio' }
		}
	}
} as SpinnerStoryMeta;

export const Spinner: SpinnerStory = (props: SpinnerProps<PolymorphicDefaultElement>): ReactElement => (
	<Center w='auto'>
		<SpinnerComponent {...props} w='100%' p={4} />;
	</Center>
);
