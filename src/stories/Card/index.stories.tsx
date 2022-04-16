import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { Meta, Story } from './types';

import CardComponent from '../../components/Card';
import { CardColor, CardProps, Variant } from '../../components/Card/types';
import controls from '../common/controls';

const colorDefaultValue: CardColor = 'gray';
const colorOptions: CardColor[] = [
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

const variantDefaultValue: Variant = 'outlined';
const variantOptions: Variant[] = ['contained', 'outlined', 'transparent'];

export default {
	title: 'Card',
	component: CardComponent,
	argTypes: {
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: colorDefaultValue,
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
		isDivisible: {
			name: 'Divisible',
			type: 'boolean',
			defaultValue: true,
			// description: '',
			control: 'boolean'
		},
		isLight: {
			name: 'Light',
			type: 'boolean',
			defaultValue: true,
			// description: '',
			control: 'boolean'
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		isFixed: {
			name: 'Fixed',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		spacing: { ...controls.theme.spacing, defaultValue: 2 },
		padding: { ...controls.theme.padding, defaultValue: 2 },
		margin: { ...controls.theme.margin },
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: variantDefaultValue,
			// description: '',
			options: [...variantOptions],
			control: 'select'
		}
	}
	// parameters: {
	// 	backgrounds: {
	// 		default: 'twitter',
	// 		values: [
	// 			{ name: 'twitter', value: '#00aced' },
	// 			{ name: 'facebook', value: '#3b5998' }
	// 		]
	// 	}
	// }
} as Meta;

export const Card: Story = (props: CardProps): ReactElement => (
	<CardComponent {...props}>
		<Box p={10} bg='red' />
		<Box p={10} bg='blue' />
	</CardComponent>
);
