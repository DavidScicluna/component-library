import { ReactElement } from 'react';

import {
	ButtonRenderProps,
	ButtonSize,
	ButtonVariant,
	DummyButton as DummyButtonComponent,
	DummyButtonProps,
	Icon
} from '../../../..';
import icons from '../../../../common/data/icons';
import { color as defaultColor } from '../../../../common/default/props';
import { AppColors } from '../../../../common/types';
import {
	isCompact as defaultIsCompact,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../../../../components/Clickable/Buttons/common/default/props';
import controls from '../../../common/controls';
import parameters from '../../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: AppColors = [
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

const variantOptions: ButtonVariant[] = ['text', 'light', 'contained', 'outlined', 'monochrome'];

const renderMapping = Object.assign(
	{ none: undefined },
	...icons.map((icon) => {
		return {
			[icon]: ({ colorMode }: ButtonRenderProps) => <Icon colorMode={colorMode} icon={icon} />
		};
	})
);

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
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: defaultIsCompact,
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

export const DummyButton: Story = {
	render: (props: DummyButtonProps): ReactElement => <DummyButtonComponent {...props} />
};
