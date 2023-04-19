import { ReactElement } from 'react';

import { Tag as TagComponent, TagColor, TagDeleteIconButton, TagLabel,TagProps, TagVariant } from '../../..';
import {
	color as defaultColor,
	isActive as defaultIsActive,
	isClickable as defaultIsClickable,
	// isFixed as defaultIsFixed,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	variant as defaultVariant
} from '../../../components/DataDisplay/Tag/common/data/defaultPropValues';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

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
		colorMode: { ...controls.theme.colorMode },
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
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Tag: Story = (props: TagProps): ReactElement => (
	<TagComponent {...props}>
		<TagLabel>Hello I am a Tag</TagLabel>
		<TagDeleteIconButton onDelete={() => console.log('Deleted')} />
	</TagComponent>
);
