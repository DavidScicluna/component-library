import { ReactElement } from 'react';

import { Meta, Story } from './types';

import icons from '../../../common/data/icons';
import ButtonComponent from '../../../components/Clickable/Button';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	size as defaultSize,
	variant as defaultVariant
} from '../../../components/Clickable/Button/common/data/defaultPropValues';
import { ButtonColor, RenderProps, Size, Variant, ButtonProps } from '../../../components/Clickable/Button/types';
import Icon from '../../../components/Icon';
import controls from '../../common/controls';

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

const sizeOptions: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

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
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode, defaultValue: defaultColorMode },
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: defaultIsFullWidth,
			// description: '',
			control: 'boolean'
		},
		isLoading: {
			name: 'Loading',
			type: 'boolean',
			defaultValue: defaultIsLoading,
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
