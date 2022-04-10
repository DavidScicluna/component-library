import { ReactElement } from 'react';

import { Meta, Story } from './types';

import IconButtonComponent from '../../../components/Clickable/IconButton';
import { IconButtonProps } from '../../../components/Clickable/IconButton/types';
import Icon from '../../../components/Icon';
import Provider from '../../../components/Provider';

export default {
	title: 'Clickable/Icon Button',
	component: IconButtonComponent,
	argTypes: {
		children: {
			name: 'Icon',
			defaultValue: 'Square',
			// description: '',
			options: ['Square', 'Alert Icon', 'Cake Icon', 'Face Icon', 'World Icon', 'Heart Icon'],
			mapping: {
				'Square': <Icon icon='crop_square' type='filled' />,
				'Alert Icon': <Icon icon='report' type='filled' />,
				'Cake Icon': <Icon icon='cake' type='filled' />,
				'Face Icon': <Icon icon='face' type='filled' />,
				'World Icon': <Icon icon='public' type='filled' />,
				'Heart Icon': <Icon icon='favorite' type='filled' />
			},
			control: 'select'
		},
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: 'gray',
			// description: '',
			options: [
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
			],
			control: 'select'
		},
		colorMode: {
			name: 'ColorMode',
			type: 'string',
			defaultValue: 'light',
			// description: '',
			options: ['light', 'dark'],
			control: 'radio'
		},
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
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: 'md',
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: 'select'
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: 'contained',
			// description: '',
			options: ['contained', 'outlined', 'icon'],
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

export const IconButton: Story = (props: IconButtonProps): ReactElement => (
	<Provider>
		<IconButtonComponent {...props} />
	</Provider>
);
