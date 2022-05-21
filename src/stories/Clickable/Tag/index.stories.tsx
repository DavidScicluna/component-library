import { ReactElement } from 'react';

import { Meta, Story } from './types';

import { TagColor, TagProps, TagVariant, Tag as TagComponent, TagDeleteButton, TagLabel } from '../../..';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isActive as defaultIsActive,
	isFullWidth as defaultIsFullWidth,
	isClickable as defaultIsClickable,
	// isFixed as defaultIsFixed,
	isDisabled as defaultIsDisabled,
	variant as defaultVariant
} from '../../../components/DataDisplay/Tag/common/data/defaultPropValues';
import controls from '../../common/controls';

const colorOptions: TagColor[] = [
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

const variantOptions: TagVariant[] = ['contained', 'outlined', 'text'];

export default {
	title: 'Tag',
	component: TagComponent,
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
		is: {
			name: 'Divisible',
			type: 'boolean',
			defaultValue: defaultIsActive,
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
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: defaultIsFullWidth,
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
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		margin: { ...controls.theme.margin },
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

export const Tag: Story = (props: TagProps): ReactElement => (
	<TagComponent {...props}>
		<TagLabel>Hello I am a Tag</TagLabel>
		<TagDeleteButton onDelete={() => console.log('Deleted')} />
	</TagComponent>
);
