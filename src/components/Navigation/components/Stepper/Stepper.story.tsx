import { useState } from 'react';

import { range, sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { appColors } from '@common/data';
import { useGetColor } from '@common/hooks';
import type { ThemeAppColor } from '@common/types';

import { Center, VStack } from '@components/Layout';
import { Text } from '@components/Typography';
import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_STEPPER_IS_DISABLED__,
	__DEFAULT_STEPPER_IS_FITTED__,
	__DEFAULT_STEPPER_ORIENTATION__,
	__DEFAULT_STEPPER_SIZE__
} from './common/constants';
import type { StepperAlign, StepperOrientation, StepperProps, StepperSize } from './common/types';
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

export const Stepper: StepperStory = (props: StepperProps<any>): JSX.Element => {
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
					{__DEFAULT_STEPPER_STORY_STEPPER__.map((step, index) => {
						const status: StepStatusType = 'error';
						return (
							<Step
								key={step}
								color={!color ? __DEFAULT_STEPPER_STORY_COLOR__ : color}
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
					{__DEFAULT_STEPPER_STORY_STEPPER__.map((step, index) => (
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
