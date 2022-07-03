import { ReactElement } from 'react';

import { Meta, Story } from './types';

import {
	ButtonColor,
	ButtonSize,
	ButtonVariant,
	ButtonProps,
	ButtonRenderProps,
	Button as ButtonComponent
} from '../../../..';
import icons from '../../../../common/data/icons';
import {
	color as defaultColor,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	size as defaultSize,
	variant as defaultVariant
} from '../../../../components/Clickable/Buttons/common/data/defaultPropValues';
import Icon from '../../../../components/Icon';
import controls from '../../../common/controls';
import parameters from '../../../common/parameters';

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
			[icon]: ({ colorMode }: ButtonRenderProps) => <Icon colorMode={colorMode} icon={icon} />
		};
	})
);

const sizeOptions: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const variantOptions: ButtonVariant[] = ['contained', 'outlined', 'text'];

export default {
	title: 'Clickable/Buttons/Button',
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
		colorMode: { ...controls.theme.colorMode },
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
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Button: Story = (props: ButtonProps): ReactElement => <ButtonComponent {...props} />;
