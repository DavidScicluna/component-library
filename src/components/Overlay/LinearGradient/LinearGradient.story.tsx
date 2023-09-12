import type { ReactElement } from 'react';

import type { GradientFromMiddleToClassArr, PolymorphicDefaultElement } from '@common/types';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';

import {
	// __DEFAULT_LINEAR_GRADIENT_COLOR__,
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM_POS__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE_POS__,
	__DEFAULT_LINEAR_GRADIENT_TO_POS__
} from './common/constants';
import type { LinearGradientDirections, LinearGradientProps } from './common/types';
import type { LinearGradientStory, LinearGradientStoryMeta } from './common/types/story';
import { LinearGradient as LinearGradientComponent } from '.';

export default {
	title: 'Overlay/LinearGradient',
	component: LinearGradientComponent,
	argTypes: {
		// TODO: Go over all control: { type: 'radio' } and check type
		direction: {
			name: 'Direction',
			type: 'string',
			defaultValue: __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
			// description: '',
			options: ['b', 'br', 'tr', 'r', 't', 'bl', 'l', 'tl'] as LinearGradientDirections,
			control: { type: 'radio' }
		},
		fromPos: {
			name: 'From Position',
			type: 'string',
			defaultValue: __DEFAULT_LINEAR_GRADIENT_FROM_POS__,
			// description: '',
			options: [
				0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100
			] as GradientFromMiddleToClassArr,
			control: { type: 'radio' }
		},
		// fromColor: {
		// 	name: 'From Color',
		// 	type: 'string',
		// 	defaultValue: __DEFAULT_LINEAR_GRADIENT_COLOR__.from,
		// 	// description: '',
		// 	options: [
		// 		'red',
		// 		'pink',
		// 		'purple',
		// 		'deep_purple',
		// 		'indigo',
		// 		'blue',
		// 		'light_blue',
		// 		'cyan',
		// 		'teal',
		// 		'green',
		// 		'light_green',
		// 		'lime',
		// 		'yellow',
		// 		'orange',
		// 		'deep_orange'
		// 	] as ThemeAppColorArr,
		// 	control: { type: 'radio' }
		// },
		middlePos: {
			name: 'Middle Position',
			type: 'string',
			defaultValue: __DEFAULT_LINEAR_GRADIENT_MIDDLE_POS__,
			// description: '',
			options: [
				0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100
			] as GradientFromMiddleToClassArr,
			control: { type: 'radio' }
		},
		// middleColor: {
		// 	name: 'Middle Color',
		// 	type: 'string',
		// 	defaultValue: __DEFAULT_LINEAR_GRADIENT_COLOR__.middle,
		// 	// description: '',
		// 	options: [
		// 		'red',
		// 		'pink',
		// 		'purple',
		// 		'deep_purple',
		// 		'indigo',
		// 		'blue',
		// 		'light_blue',
		// 		'cyan',
		// 		'teal',
		// 		'green',
		// 		'light_green',
		// 		'lime',
		// 		'yellow',
		// 		'orange',
		// 		'deep_orange'
		// 	] as ThemeAppColorArr,
		// 	control: { type: 'radio' }
		// },
		toPos: {
			name: 'To Position',
			type: 'string',
			defaultValue: __DEFAULT_LINEAR_GRADIENT_TO_POS__,
			// description: '',
			options: [
				0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100
			] as GradientFromMiddleToClassArr,
			control: { type: 'radio' }
		}
		// toColor: {
		// 	name: 'To Color',
		// 	type: 'string',
		// 	defaultValue: __DEFAULT_LINEAR_GRADIENT_COLOR__.to,
		// 	// description: '',
		// 	options: [
		// 		'red',
		// 		'pink',
		// 		'purple',
		// 		'deep_purple',
		// 		'indigo',
		// 		'blue',
		// 		'light_blue',
		// 		'cyan',
		// 		'teal',
		// 		'green',
		// 		'light_green',
		// 		'lime',
		// 		'yellow',
		// 		'orange',
		// 		'deep_orange'
		// 	] as ThemeAppColorArr,
		// 	control: { type: 'radio' }
		// }
	}
} as LinearGradientStoryMeta;

export const LinearGradient: LinearGradientStory = (
	props: LinearGradientProps<PolymorphicDefaultElement>
): ReactElement => {
	const { colorMode } = useStorybookContext();

	return (
		<LinearGradientComponent
			{...props}
			color={{
				from: 'red',
				middle: 'yellow',
				to: 'green'
			}}
			colorMode={colorMode}
			w='100%'
			h='100%'
			p={4}
		/>
	);
};
