import { ReactElement } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

import icons from '../../common/data/icons';
import { Icon as IconType } from '../../common/types/icons';
import IconComponent from '../../components/Icon';
import { Type, IconProps } from '../../components/Icon/types';
import { Radius, FontSize, Space } from '../../theme/types';

const childrenDefaultValue: IconType | undefined = sample(icons);
const childrenOptions: IconType[] = [...icons];

const colorModeDefaultValue: ColorMode = 'light';
const colorModeOptions: ColorMode[] = ['light', 'dark'];

const borderRadiusDefaultValue: Radius = 'none';
const borderRadiusOptions: Radius[] = ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'];

const fontSizesDefaultValue: FontSize = '2xl';
const fontSizesOptions: FontSize[] = [
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
	'9xl'
];

const spaceDefaultValue: Space = 0;
const spaceMin: Space = 0;
const spaceMax: Space = 20.75;
const spaceStep: Space = 0.25;

const typeDefaultValue: Type = 'filled';
const typeOptions: Type[] = ['filled', 'outlined'];

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
			// description: '',
			control: 'color'
		},
		colorMode: {
			name: 'ColorMode',
			type: 'string',
			defaultValue: colorModeDefaultValue,
			// description: '',
			options: colorModeOptions,
			control: 'radio'
		},
		backgroundColor: {
			name: 'Background-Color',
			type: 'string',
			// description: '',
			control: 'color'
		},
		borderRadius: {
			name: 'Border-Radius',
			type: 'string',
			defaultValue: borderRadiusDefaultValue,
			// description: '',
			options: borderRadiusOptions,
			control: 'select'
		},
		fontSize: {
			name: 'Font-Size',
			type: 'string',
			defaultValue: fontSizesDefaultValue,
			// description: '',
			options: fontSizesOptions,
			control: 'select'
		},
		padding: {
			name: 'Padding',
			type: 'number',
			defaultValue: spaceDefaultValue,
			// description: '',
			control: { type: 'range', min: spaceMin, max: spaceMax, step: spaceStep }
		},
		margin: {
			name: 'Margin',
			type: 'number',
			defaultValue: spaceDefaultValue,
			// description: '',
			control: { type: 'range', min: spaceMin, max: spaceMax, step: spaceStep }
		},
		type: {
			name: 'Type',
			type: 'string',
			defaultValue: typeDefaultValue,
			// description: '',
			options: typeOptions,
			control: 'radio'
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

export const Icon: Story = (props: IconProps): ReactElement => <IconComponent {...props} />;
