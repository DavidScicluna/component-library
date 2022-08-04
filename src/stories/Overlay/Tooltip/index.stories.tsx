import { ReactElement } from 'react';

import { Center } from '@chakra-ui/react';


import { TooltipColor, TooltipProps, Tooltip as TooltipComponent, DummyButton } from '../../..';
import {
	color as defaultColor,
	gutter as defaultGutter
} from '../../../components/Overlay/Tooltip/common/data/defaultPropValues';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: TooltipColor[] = [
	'black',
	'white',
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

const defaultPlacement: TooltipProps['placement'] = 'top';
const placements: TooltipProps['placement'][] = [
	'auto',
	'auto-end',
	'auto-start',
	'top',
	'top-end',
	'top-start',
	'right',
	'right-end',
	'right-start',
	'bottom',
	'bottom-end',
	'bottom-start',
	'left',
	'left-end',
	'left-start'
];

export default {
	title: 'Overlay/Tooltip',
	component: TooltipComponent,
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
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		isOpen: {
			name: 'Open',
			type: 'boolean',
			defaultValue: true,
			// description: '',
			control: 'boolean'
		},
		label: {
			name: 'Label',
			type: 'string',
			defaultValue: 'Hello I am a Tooltip',
			// description: '',
			control: 'text'
		},
		placement: {
			name: 'Placement',
			type: 'string',
			defaultValue: defaultPlacement,
			options: [...placements],
			// description: '',
			control: 'radio'
		},
		gutter: {
			name: 'Gutter',
			type: 'number',
			defaultValue: defaultGutter,
			// description: '',
			control: { type: 'number' }
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Tooltip: Story = (props: TooltipProps): ReactElement => {
	return (
		<Center p={6}>
			<TooltipComponent {...props} aria-label='Story Tooltip' shouldWrapChildren>
				<DummyButton>Hello I am a Button</DummyButton>
			</TooltipComponent>
		</Center>
	);
};
