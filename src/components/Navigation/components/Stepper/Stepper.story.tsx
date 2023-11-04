import { type ReactElement, useState } from 'react';

import { range, sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { appColors } from '@common/data';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeAppColor } from '@common/types';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_STEPPER_IS_DISABLED__,
	__DEFAULT_STEPPER_IS_FITTED__,
	__DEFAULT_STEPPER_ORIENTATION__,
	__DEFAULT_STEPPER_SIZE__
} from './common/constants';
import type { StepperAlign, StepperOrientation, StepperProps, StepperSize } from './common/types';
import type { StepperStory, StepperStoryMeta } from './common/types/story';
import { Step, StepIcon, StepList, StepPanels, Stepper as StepperComponent } from '.';

const __DEFAULT_STEPPER_STORY_COLOR__: ThemeAppColor = sample(appColors) || 'blue';
const __DEFAULT_STEPPER_STORY_STEPPER__ = range(10);

export default {
	title: 'Navigation/Stepper',
	component: StepperComponent,
	argTypes: {
		align: {
			name: 'Align',
			type: 'string',
			defaultValue: __DEFAULT_STEPPER_SIZE__,
			// description: '',
			options: ['center', 'end', 'start'] as Array<StepperAlign>,
			control: { type: 'radio' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_STEPPER_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: __DEFAULT_STEPPER_IS_FITTED__,
			// description: '',
			control: { type: 'boolean' }
		},
		orientation: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_STEPPER_ORIENTATION__,
			// description: '',
			options: ['top', 'bottom', 'left', 'right'] as Array<StepperOrientation>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_STEPPER_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<StepperSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 , .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as StepperStoryMeta;

export const Stepper: StepperStory = (props: StepperProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });

	const [index, setIndex] = useState<number>(0);

	return (
		<StepperComponent
			{...props}
			color={color}
			colorMode={colorMode}
			w='100%'
			index={index}
			onChange={(index) => setIndex(index as number)}
		>
			<StepList>
				{__DEFAULT_STEPPER_STORY_STEPPER__.map((step, index) => (
					<Step
						key={step}
						color={!color ? __DEFAULT_STEPPER_STORY_COLOR__ : color}
						index={index}
						renderTop={
							props.orientation === 'top' ? () => <StepIcon icon='12mp' category='filled' /> : undefined
						}
						spacing={0}
					>
						{`Step ${index + 1}`}
					</Step>
				))}
			</StepList>
			<StepPanels>
				{__DEFAULT_STEPPER_STORY_STEPPER__.map((step, index) => (
					<Center key={step} p={4}>
						<Text align='center' color={text}>
							{`Step ${index + 1} Panel`}
						</Text>
					</Center>
				))}
			</StepPanels>
		</StepperComponent>
	);
};
