import { ReactElement } from 'react';

import { sample } from 'lodash-es';

import {
	DummyIconButton as DummyIconButtonComponent,
	DummyIconButtonIcon,
	DummyIconButtonProps,
	IconButtonColor,
	IconButtonSize,
	IconButtonVariant,
	IconType
} from '../../../..';
import icons from '../../../../common/data/icons';
import { color as defaultColor } from '../../../../common/default/props';
import {
	isCompact as defaultIsCompact,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../../../../components/Clickable/IconButtons/common/default/props';
import controls from '../../../common/controls';
import parameters from '../../../common/parameters';

import { Meta, Story } from './types';

const childrenDefaultValue: IconType | undefined = sample(icons);
const childrenOptions: IconType[] = [...icons];
const childrenMapping = Object.assign(
	{},
	...icons.map((icon) => {
		return {
			[icon]: <DummyIconButtonIcon icon={icon} />
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

const variantOptions: IconButtonVariant[] = ['light', 'contained', 'outlined', 'monochrome', 'icon'];

export default {
	title: 'Clickable/Icon Buttons/Dummy Icon Button',
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
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: defaultIsCompact,
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

export const DummyIconButton: Story = (props: DummyIconButtonProps): ReactElement => (
	<DummyIconButtonComponent {...props} />
);
