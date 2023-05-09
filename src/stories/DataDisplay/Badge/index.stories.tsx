import { ReactElement } from 'react';

import { sample } from 'lodash-es';

import {
	Badge as BadgeComponent,
	BadgeCloseIconButton,
	BadgeColor,
	BadgeIcon,
	BadgeLabel,
	BadgeProps,
	BadgeSize,
	BadgeVariant
} from '../../..';
import icons from '../../../common/data/icons';
import { color as defaultColor } from '../../../common/default/props';
import { Icon } from '../../../common/types/icons';
import {
	isActive as defaultIsActive,
	isClickable as defaultIsClickable,
	isCompact as defaultIsCompact,
	isDisabled as defaultIsDisabled,
	isFixed as defaultIsFixed,
	isFullWidth as defaultIsFullWidth,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../../../components/DataDisplay/Badge/common/default/props';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

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

const sizeOptions: BadgeSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'];

const variantOptions: BadgeVariant[] = ['text', 'light', 'contained', 'outlined', 'monochrome'];

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
		colorMode: { ...controls.theme.colorMode },
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: defaultIsActive,
			// description: '',
			control: 'boolean'
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: defaultIsClickable,
			// description: '',
			control: 'boolean'
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: defaultIsCompact,
			// description: '',
			control: 'boolean'
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		isFixed: {
			name: 'Fixed',
			type: 'boolean',
			defaultValue: defaultIsFixed,
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
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: defaultIsRound,
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

export const Badge: Story = (props: BadgeProps): ReactElement => (
	<BadgeComponent {...props}>
		<BadgeIcon icon={icon} />
		<BadgeLabel>Hello I am a Badge</BadgeLabel>
		<BadgeCloseIconButton />
	</BadgeComponent>
);
