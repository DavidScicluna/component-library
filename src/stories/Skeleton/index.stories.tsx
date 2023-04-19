import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { Skeleton as SkeletonComponent,SkeletonColor, SkeletonProps, SkeletonVariant } from '../..';
import {
	color as defaultColor,
	isLoaded as defaultIsLoaded,
	isReversed as defaultIsReversed,
	variant as defaultVariant
} from '../../components/Skeleton/common/data/defaultPropValues';
import controls from '../common/controls';
import parameters from '../common/parameters';

import { Meta, Story } from './types';

const colorOptions: SkeletonColor[] = [
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

const typeOptions: SkeletonVariant[] = ['rectangle', 'circle', 'text'];

export default {
	title: 'Skeleton',
	component: SkeletonComponent,
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
		isLoaded: {
			name: 'Loaded',
			type: 'boolean',
			defaultValue: defaultIsLoaded,
			// description: '',
			control: 'boolean'
		},
		isReversed: {
			name: 'Reversed',
			type: 'boolean',
			defaultValue: defaultIsReversed,
			// description: '',
			control: 'boolean'
		},
		padding: { ...controls.theme.padding, defaultValue: 6 },
		margin: { ...controls.theme.margin },
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: defaultVariant,
			// description: '',
			options: [...typeOptions],
			control: 'radio'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Skeleton: Story = ({ padding, ...rest }: SkeletonProps): ReactElement => (
	<SkeletonComponent {...rest}>
		<Box
			p={padding}
			backgroundColor={`yellow.${rest.colorMode === 'light' ? 500 : 400}`}
			borderRadius={rest.variant === 'rectangle' ? 'base' : rest.variant === 'text' ? 'xs' : 'full'}
		/>
	</SkeletonComponent>
);
