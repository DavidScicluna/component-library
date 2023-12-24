import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement, ThemeRadiusArr } from '@common/types';

import { Center } from '@components/Layout';

import { __DEFAULT_PUFF_SPINNER_IS_VISIBLE__, __DEFAULT_PUFF_SPINNER_SIZE__ } from './common/constants';
import type { PuffSpinnerProps, PuffSpinnerSize } from './common/types';
import type { PuffSpinnerStory, PuffSpinnerStoryMeta } from './common/types/story';
import { PuffSpinner as PuffSpinnerComponent } from '.';
import { __DEFAULT_RADIUS__ } from '@common/constants';

export default {
	title: 'Feedback/PuffSpinner',
	component: PuffSpinnerComponent,
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
			defaultValue: __DEFAULT_PUFF_SPINNER_IS_VISIBLE__,
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
			defaultValue: __DEFAULT_PUFF_SPINNER_SIZE__,
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
			] as Array<PuffSpinnerSize>,
			control: { type: 'radio' }
		}
	}
} as PuffSpinnerStoryMeta;

export const PuffSpinner: PuffSpinnerStory = (props: PuffSpinnerProps<PolymorphicDefaultElement>): ReactElement => (
	<Center w='auto'>
		<PuffSpinnerComponent {...props} />
	</Center>
);
