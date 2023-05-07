import { ReactElement } from 'react';

import { HStack } from '@chakra-ui/react';

import { capitalize } from 'lodash-es';

import { Alert as AlertComponent, AlertProps, AlertStatus, DummyButton } from '../..';
import controls from '../common/controls';
import parameters from '../common/parameters';

import { Meta, Story } from './types';

const defaultStatus: AlertStatus = 'info';
const statusOptions: AlertStatus[] = ['info', 'warning', 'success', 'error'];

export default {
	title: 'Alert',
	component: AlertComponent,
	argTypes: {
		colorMode: { ...controls.theme.colorMode },
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
		spacing: { ...controls.theme.spacing, defaultValue: 2 },
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
