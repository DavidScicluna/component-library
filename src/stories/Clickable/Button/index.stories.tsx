import { ReactElement } from 'react';

import { Meta, Story } from './types';

import icons from '../../../common/data/icons';
import ButtonComponent from '../../../components/Clickable/Button';
import { ButtonColor, RenderProps, Size, Variant, ButtonProps } from '../../../components/Clickable/Button/types';
import Icon from '../../../components/Icon';
import controls from '../../common/controls';

const colorDefaultValue: ButtonColor = 'gray';
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

const renderMapping = Object.assign(
	{ none: undefined },
	...icons.map((icon) => {
		return {
			[icon]: ({ colorMode }: RenderProps) => <Icon colorMode={colorMode} icon={icon} type='filled' />
		};
	})
);

const sizeDefaultValue: Size = 'md';
const sizeOptions: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const variantDefaultValue: Variant = 'contained';
const variantOptions: Variant[] = ['contained', 'outlined', 'text'];

export default {
	title: 'Clickable/Button',
	component: ButtonComponent,
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
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		isLoading: {
			name: 'Loading',
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
		renderLeft: {
			name: 'Left Element',
			defaultValue: 'none',
			// description: '',
			options: ['none', ...icons],
			mapping: { ...renderMapping },
			control: 'select'
		},
		renderRight: {
			name: 'Right Element',
			defaultValue: 'none',
			// description: '',
			options: ['none', ...icons],
			mapping: { ...renderMapping },
			control: 'select'
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: sizeDefaultValue,
			// description: '',
			options: [...sizeOptions],
			control: 'select'
		},
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

export const Button: Story = (props: ButtonProps): ReactElement => <ButtonComponent {...props} />;
