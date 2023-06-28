import { ReactElement, useState } from 'react';

import { range } from 'lodash-es';

import { AppColors } from '../../..';
// import { AppColors, Icon, StepList, StepPanels, Steps as StepsComponent, StepsProps, StepsSize } from '../../..';
import { color as defaultColor } from '../../../common/default/props';
import {
	isConsecutively as defaultIsConsecutively,
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../../components/Navigation/Stepper/common/default/props';
import { StepperSize } from '../../../components/Navigation/Stepper/common/types';
import StepperComponent from '../../../components/Navigation/Stepper/OriginalStepper';
import { StepperProps } from '../../../components/Navigation/Stepper/OriginalStepper/common/types';
import StepList from '../../../components/Navigation/Stepper/OriginalStepper/components/StepList';
import StepPanels from '../../../components/Navigation/Stepper/OriginalStepper/components/StepPanels';
// import StepProgress from '../../../components/Navigation/Stepper/OriginalStepper/components/StepProgress';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: AppColors = [
	'gray',
	'red',
	'pink',
	'purple',
	'deep_purple',
	'indigo',
	'blue',
	'light_blue',
	'cyan',
	'teal',
	'green',
	'light_green',
	'lime',
	'yellow',
	'orange',
	'deep_orange'
];

const sizeOptions: StepperSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Navigation/Stepper',
	component: StepperComponent,
	argTypes: {
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode },
		isConsecutively: {
			name: 'Consecutively',
			type: 'boolean',
			defaultValue: defaultIsConsecutively,
			// description: '',
			control: 'boolean'
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: defaultIsFitted,
			// description: '',
			control: 'boolean'
		},
		size: {
			name: 'Size',
			type: 'boolean',
			defaultValue: defaultSize,
			// description: '',
			options: [...sizeOptions],
			control: 'select'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Stepper: Story = (props: StepperProps): ReactElement => {
	const [activeStep, setActiveStep] = useState<number>(props.activeStep || 0);

	return (
		<StepperComponent
			{...props}
			activeStep={activeStep}
			totalSteps={range(2).length}
			onChange={({ index }) => setActiveStep(index)}
			variant='dot'
		>
			<StepList
				steps={range(2).map((_step, index) => ({
					index: index + 1,
					title: `Step ${index + 1}`,
					subtitle: `Step ${index + 1}`,
					// hasIcon: true,
					// isActive?: boolean;
					// isDisabled?: boolean;
					// isSelected?: boolean;
					status:
						index === 0
							? 'active'
							: index === 1
							? 'error'
							: index === 2
							? 'success'
							: index === 3
							? 'warning'
							: 'idle'
					// sx?: Style;
				}))}
			/>
			{/* <StepProgress width='100%' height={theme.space[1]} borderRadius='full' /> */}
			<StepPanels>
				<div />
				<div />
				<div />
				<div />
			</StepPanels>
		</StepperComponent>
	);
};
