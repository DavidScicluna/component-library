import { ReactElement } from 'react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

import { BadgeColor, BadgeProps, BadgeVariant, Badge as BadgeComponent, BadgeIcon, BadgeLabel } from '../../..';
import icons from '../../../common/data/icons';
import { Icon } from '../../../common/types/icons';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight,
	variant as defaultVariant
} from '../../../components/DataDisplay/Badge/common/data/defaultPropValues';
import controls from '../../common/controls';

const colorOptions: BadgeColor[] = [
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

const icon: Icon = sample(icons) || icons[0];

const variantOptions: BadgeVariant[] = ['contained', 'outlined', 'text'];

export default {
	title: 'Data Display/Badge',
	component: BadgeComponent,
	argTypes: {
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode, defaultValue: defaultColorMode },
		isLight: {
			name: 'Light',
			type: 'boolean',
			defaultValue: defaultIsLight,
			// description: '',
			control: 'boolean'
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

export const Badge: Story = (props: BadgeProps): ReactElement => (
	<BadgeComponent {...props}>
		<BadgeIcon icon={icon} />
		<BadgeLabel>Hello I am a Badge</BadgeLabel>
	</BadgeComponent>
);
