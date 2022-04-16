import { ReactElement } from 'react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

import icons from '../../../common/data/icons';
import { Icon as IconType } from '../../../common/types/icons';
import IconButtonComponent from '../../../components/Clickable/IconButton';
import { IconButtonColor, Size, Variant, IconButtonProps } from '../../../components/Clickable/IconButton/types';
import Icon from '../../../components/Icon';
import controls from '../../common/controls';

const childrenDefaultValue: IconType | undefined = sample(icons);
const childrenOptions: IconType[] = [...icons];
const childrenMapping = Object.assign(
	{},
	...icons.map((icon) => {
		return {
			[icon]: <Icon icon={icon} type='filled' />
		};
	})
);

const colorDefaultValue: IconButtonColor = 'gray';
const colorOptions: IconButtonColor[] = [
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

const sizeDefaultValue: Size = 'md';
const sizeOptions: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const variantDefaultValue: Variant = 'contained';
const variantOptions: Variant[] = ['contained', 'outlined', 'icon'];

export default {
	title: 'Clickable/Icon Button',
	component: IconButtonComponent,
	argTypes: {
		children: {
			name: 'Icon',
			defaultValue: childrenDefaultValue,
			// description: '',
			options: childrenOptions,
			mapping: childrenMapping,
			control: 'select'
		},
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: colorDefaultValue,
			// description: '',
			options: colorOptions,
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
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: sizeDefaultValue,
			// description: '',
			options: sizeOptions,
			control: 'select'
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: variantDefaultValue,
			// description: '',
			options: variantOptions,
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

export const IconButton: Story = (props: IconButtonProps): ReactElement => <IconButtonComponent {...props} />;
