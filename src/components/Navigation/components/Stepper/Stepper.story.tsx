import { useState } from 'react';

import { range, sample } from 'lodash-es';

import { DEFAULT_SPACING } from '../../../../common/constants';
import { appColors } from '../../../../common/data';
import { useGetColor } from '../../../../common/hooks';
import type { ThemeAppColor } from '../../../../common/types';
import React from 'react';
import { Center, VStack } from '../../../Layout';
import { Text } from '../../../Typography';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_STEPPER_IS_DISABLED,
	DEFAULT_STEPPER_IS_FITTED,
	DEFAULT_STEPPER_ORIENTATION,
	DEFAULT_STEPPER_SIZE
} from './common/constants';
import type {
	StepperAlign,
	StepperDefaultElement,
	StepperOrientation,
	StepperProps,
	StepperSize
} from './common/types';
import type { StepperStory, StepperStoryMeta } from './common/types/story';
import type { StepStatus as StepStatusType } from './components/Step/common/types';
import {
	Step,
	StepHeadline,
	// StepIcon,
	StepList,
	StepPanels,
	Stepper as StepperComponent,
	StepProgress,
	StepStatus,
	StepStatusIcon,
	StepSubtitle,
	StepTitle
} from '.';

const DEFAULT_STEPPER_STORY_COLOR: ThemeAppColor = sample(appColors) || 'blue';
const DEFAULT_STEPPER_STORY_STEPPER = range(10);

export default {
	title: 'Navigation/Stepper',
	component: StepperComponent,
	argTypes: {
		align: {
			name: 'Align',
			type: 'string',
			defaultValue: DEFAULT_STEPPER_SIZE,
			// description: '',
			options: ['center', 'end', 'start'] as Array<StepperAlign>,
			control: { type: 'radio' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_STEPPER_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: DEFAULT_STEPPER_IS_FITTED,
			// description: '',
			control: { type: 'boolean' }
		},
		orientation: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_STEPPER_ORIENTATION,
			// description: '',
			options: ['top', 'bottom', 'left', 'right'] as Array<StepperOrientation>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_STEPPER_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<StepperSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 , .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as StepperStoryMeta;

export const Stepper: StepperStory = (props: StepperProps<StepperDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'text.primary', classType: 'text' });

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
			<VStack w='100%' h='100%' spacing={4}>
				<StepList>
					{DEFAULT_STEPPER_STORY_STEPPER.map((step, index) => {
						const status: StepStatusType = 'error';
						return (
							<Step
								key={step}
								color={!color ? DEFAULT_STEPPER_STORY_COLOR : color}
								index={index}
								status={status}
								// renderTop={
								// 	props.orientation === 'top' ? () => <StepIcon icon='12mp' category='filled' /> : undefined
								// }
								renderRight={() => <StepStatusIcon />}
								spacing={0}
							>
								<VStack w='100%' h='100%'>
									<StepStatus />
									<StepTitle>{`${index + 1}. Step ${index + 1}`}</StepTitle>
									<StepSubtitle>{`Step ${index + 1} subtitle`}</StepSubtitle>
								</VStack>
							</Step>
						);
					})}
				</StepList>
				<StepProgress />
				<StepPanels>
					{DEFAULT_STEPPER_STORY_STEPPER.map((step, index) => (
						<VStack key={step} w='100%' h='100%' spacing={4}>
							<StepHeadline />
							<Center key={step} p={4}>
								<Text align='center' color={text}>
									{`Step ${index + 1} Panel`}
								</Text>
							</Center>
						</VStack>
					))}
				</StepPanels>
			</VStack>
		</StepperComponent>
	);
};
