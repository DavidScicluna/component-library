import { ReactElement } from 'react';

import {
	ButtonColor,
	ButtonSize,
	ButtonVariant,
	DummyButton as DummyButtonComponent,
	DummyButtonProps} from '../../../..';
import {
	color as defaultColor,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../../../../components/Clickable/Buttons/common/data/defaultPropValues';
import controls from '../../../common/controls';
import parameters from '../../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: ButtonColor[] = [
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

const sizeOptions: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const variantOptions: ButtonVariant[] = ['contained', 'outlined', 'text'];

export default {
	title: 'Clickable/Buttons/DummyButton',
	component: DummyButtonComponent,
	argTypes: {
		children: {
			name: 'Label',
			type: 'string',
			defaultValue: 'Hello I am a Button',
			// description: '',
			control: 'text'
		},
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode },
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: defaultIsFullWidth,
			// description: '',
			control: 'boolean'
		},
		hasLeft: {
			name: 'Has left',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		hasRight: {
			name: 'Has right',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: defaultSize,
			// description: '',
			options: [...sizeOptions],
			control: 'select'
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: defaultVariant,
			// description: '',
			options: [...variantOptions],
			control: 'select'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const DummyButton: Story = (props: DummyButtonProps): ReactElement => <DummyButtonComponent {...props} />;
