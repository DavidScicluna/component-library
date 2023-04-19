import { ReactElement } from 'react';

import { sample } from 'lodash-es';

import {
	DummyIconButton as DummyIconButtonComponent,
	DummyIconButtonProps,
	Icon,
	IconButtonColor,
	IconButtonSize,
	IconButtonVariant,
	IconType
} from '../../../..';
import icons from '../../../../common/data/icons';
import {
	color as defaultColor,
	size as defaultSize,
	variant as defaultVariant
} from '../../../../components/Clickable/IconButtons/common/data/defaultPropValues';
import controls from '../../../common/controls';
import parameters from '../../../common/parameters';

import { Meta, Story } from './types';

const childrenDefaultValue: IconType | undefined = sample(icons);
const childrenOptions: IconType[] = [...icons];
const childrenMapping = Object.assign(
	{},
	...icons.map((icon) => {
		return {
			[icon]: <Icon icon={icon} />
		};
	})
);

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

const sizeOptions: IconButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const variantOptions: IconButtonVariant[] = ['contained', 'outlined', 'icon'];

export default {
	title: 'Clickable/IconButtons/DummyIcon Button',
	component: DummyIconButtonComponent,
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
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode },
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

export const DummyIconButton: Story = (props: DummyIconButtonProps): ReactElement => (
	<DummyIconButtonComponent {...props} />
);
