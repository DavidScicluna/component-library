import { ReactElement } from 'react';

import { Meta, Story } from './types';

import ButtonComponent from '../../../components/Clickable/Button';
import { ButtonProps, RenderProps } from '../../../components/Clickable/Button/types';
import Icon from '../../../components/Icon';
import Provider from '../../../components/Provider';

export default {
	title: 'Clickable/Button',
	component: ButtonComponent,
	decorators: [
		(Story) => (
			<Provider>
				<Story />
			</Provider>
		)
	],
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
			defaultValue: 'None',
			// description: '',
			options: ['None', 'Alert Icon', 'Food Bank Icon', 'Facebook Icon', 'World Icon', 'Heart Icon'],
			mapping: {
				'None': undefined,
				'Alert Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='report' type='filled' />
				),
				'Food Bank Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='food_bank' type='filled' />
				),
				'Facebook Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='facebook' type='filled' />
				),
				'World Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='public' type='filled' />
				),
				'Heart Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='favorite' type='filled' />
				)
			},
			control: 'select'
		},
		renderRight: {
			name: 'Right Element',
			defaultValue: 'None',
			// description: '',
			options: ['None', 'Alert Icon', 'Food Bank Icon', 'Facebook Icon', 'World Icon', 'Heart Icon'],
			mapping: {
				'None': undefined,
				'Alert Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='report' type='filled' />
				),
				'Food Bank Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='food_bank' type='filled' />
				),
				'Facebook Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='facebook' type='filled' />
				),
				'World Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='public' type='filled' />
				),
				'Heart Icon': ({ colorMode }: RenderProps) => (
					<Icon colorMode={colorMode} icon='favorite' type='filled' />
				)
			},
			control: 'select'
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
			options: ['contained', 'outlined', 'text'],
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
