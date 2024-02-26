import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import { DEFAULT_LINEAR_GRADIENT_DIRECTION } from './common/constants';
import type { LinearGradientDirections, LinearGradientProps } from './common/types';
import type { LinearGradientStory, LinearGradientStoryMeta } from './common/types/story';
import { LinearGradient as LinearGradientComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Overlay/LinearGradient',
	component: LinearGradientComponent,
	argTypes: {
		// TODO: Go over all control: { type: 'radio' } and check type
		direction: {
			name: 'Direction',
			type: 'string',
			defaultValue: DEFAULT_LINEAR_GRADIENT_DIRECTION,
			// description: '',
			options: ['b', 'br', 'tr', 'r', 't', 'bl', 'l', 'tl'] as LinearGradientDirections,
			control: { type: 'radio' }
		}
	}
} as LinearGradientStoryMeta;

export const LinearGradient: LinearGradientStory = (
	props: LinearGradientProps<PolymorphicDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<LinearGradientComponent
			{...props}
			w='100%'
			h='100%'
			from={{
				color,
				colorMode,
				hueType: 'light',
				position: 0
			}}
			middle={{
				color,
				colorMode,
				hueType: 'default',
				position: 50
			}}
			to={{
				color,
				colorMode,
				hueType: 'dark',
				position: 100
			}}
			p={4}
		/>
	);
};
