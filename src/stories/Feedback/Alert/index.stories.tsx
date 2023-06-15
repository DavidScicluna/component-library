import { ReactElement } from 'react';

import { HStack } from '@chakra-ui/react';

import { capitalize } from 'lodash-es';

import { Alert as AlertComponent, AlertDuration, AlertProps, AlertStatus, DummyButton } from '../../..';
import {
	duration as defaultDuration,
	spacing as defaultSpacing
} from '../../../components/Feedback/Alert/common/default/props';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const defaultStatus: AlertStatus = 'info';

const durationOptions: AlertDuration[] = [
	5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17,
	17.5, 18, 18.5, 19, 19.5, 20
];
const statusOptions: AlertStatus[] = ['info', 'warning', 'success', 'error'];

export default {
	title: 'Feedback/Alert',
	component: AlertComponent,
	argTypes: {
		colorMode: { ...controls.theme.colorMode },
		duration: {
			name: 'Duration',
			type: 'number',
			defaultValue: defaultDuration,
			defaultOption: defaultDuration,
			// description: '',
			options: [...durationOptions],
			control: 'select'
		},
		label: {
			name: 'Label',
			type: 'string',
			defaultValue: 'Alert Label',
			// description: '',
			control: 'text'
		},
		description: {
			name: 'Description',
			type: 'string',
			defaultValue: 'Hello I am a the alert description!',
			// description: '',
			control: 'text'
		},
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing },
		status: {
			name: 'Status',
			type: 'string',
			defaultValue: defaultStatus,
			// description: '',
			options: statusOptions,
			mapping: statusOptions.map((status) => capitalize(status)),
			control: 'radio'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Alert: Story = (props: AlertProps): ReactElement => (
	<AlertComponent
		{...props}
		actions={
			<HStack>
				<DummyButton color='light_blue' colorMode={props.colorMode} size='xs'>
					Action 1
				</DummyButton>
				<DummyButton color='light_blue' colorMode={props.colorMode} size='xs'>
					Action 2
				</DummyButton>
			</HStack>
		}
	/>
);
