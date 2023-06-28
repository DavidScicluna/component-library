import { ColorMode } from '@chakra-ui/react';

import { getColorMode } from '../../../common/utils/color';
import { FontSize, Radius, Space } from '../../../theme/types';

const borderRadiusDefaultValue: Radius = 'none';
const borderRadiusOptions: Radius[] = ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'];

const borderRadius = {
	name: 'Border-Radius',
	type: 'string',
	defaultValue: borderRadiusDefaultValue,
	// description: '',
	options: borderRadiusOptions,
	control: 'select'
};

const colorModeDefaultValue: ColorMode = getColorMode();
const colorModeOptions: ColorMode[] = ['light', 'dark'];

const colorMode = {
	name: 'ColorMode',
	type: 'string',
	defaultValue: colorModeDefaultValue,
	// description: '',
	options: colorModeOptions,
	control: 'radio'
};

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

const fontSize = {
	name: 'Font-Size',
	type: 'string',
	defaultValue: fontSizesDefaultValue,
	// description: '',
	options: fontSizesOptions,
	control: 'select'
};

const spaceDefaultValue: Space = 0;
const spaceMin: Space = 0;
const spaceMax: Space = 20.75;
const spaceStep: Space = 0.25;

const spacing = {
	name: 'Spacing',
	type: 'number',
	defaultValue: spaceDefaultValue,
	// description: '',
	control: {
		type: 'range',
		min: spaceMin,
		max: spaceMax,
		step: spaceStep
	}
};

const padding = {
	name: 'Padding',
	type: 'number',
	defaultValue: spaceDefaultValue,
	// description: '',
	control: {
		type: 'range',
		min: spaceMin,
		max: spaceMax,
		step: spaceStep
	}
};

const margin = {
	name: 'Margin',
	type: 'number',
	defaultValue: spaceDefaultValue,
	// description: '',
	control: {
		type: 'range',
		min: spaceMin,
		max: spaceMax,
		step: spaceStep
	}
};

export default {
	borderRadius,
	colorMode,
	fontSize,
	spacing,
	padding,
	margin
};
