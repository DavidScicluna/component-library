import { ReactElement } from 'react';

import { sample } from 'lodash-es';

import { Icon as IconComponent, IconCategory, IconColor, IconProps, IconType, IconVariant } from '../..';
import icons from '../../common/data/icons';
import { color as defaultColor } from '../../common/default/props';
import { variant as defaultVariant } from '../../components/Icon/common/default/props';
import controls from '../common/controls';
import parameters from '../common/parameters';

import { Meta, Story } from './types';

const childrenDefaultValue: IconType | undefined = sample(icons);
const childrenOptions: IconType[] = [...icons];

const categoryDefaultValue: IconCategory = 'filled';
const categoryOptions: IconCategory[] = ['filled', 'outlined'];

const colorOptions: IconColor[] = [
	'black',
	'white',
	'gray',
	'red',
	'pink',
	'purple',
	'deep_purple',
	'indigo',
	'light_blue',
	'blue',
	'cyan',
	'teal',
	'green',
	'light_green',
	'lime',
	'yellow',
	'orange',
	'deep_orange'
];

const variantOptions: IconVariant[] = ['transparent', 'contained', 'light', 'outlined', 'monochrome'];

export default {
	title: 'Icon',
	component: IconComponent,
	argTypes: {
		icon: {
			name: 'Icon',
			defaultValue: childrenDefaultValue,
			// description: '',
			options: childrenOptions,
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
		category: {
			name: 'Category',
			type: 'string',
			defaultValue: categoryDefaultValue,
			// description: '',
			options: categoryOptions,
			control: 'radio'
		},
		borderRadius: { ...controls.theme.borderRadius },
		fontSize: { ...controls.theme.fontSize },
		width: { ...controls.common.width },
		height: { ...controls.common.height },
		padding: { ...controls.theme.padding },
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

export const Icon: Story = (props: IconProps): ReactElement => <IconComponent {...props} />;
