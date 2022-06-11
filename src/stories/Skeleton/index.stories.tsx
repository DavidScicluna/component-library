import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { Meta, Story } from './types';

import { Skeleton as SkeletonComponent, SkeletonColor, SkeletonType, SkeletonProps } from '../..';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLoaded as defaultIsLoaded,
	isReversed as defaultIsReversed,
	type as defaultType
} from '../../components/Skeleton/common/data/defaultPropValues';
import {} from '../../components/Skeleton/types';
import controls from '../common/controls';

const colorOptions: SkeletonColor[] = [
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

const typeOptions: SkeletonType[] = ['rectangle', 'circle', 'text'];

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
		colorMode: { ...controls.theme.colorMode, defaultValue: defaultColorMode },
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
		type: {
			name: 'Type',
			type: 'string',
			defaultValue: defaultType,
			// description: '',
			options: [...typeOptions],
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

export const Skeleton: Story = ({ padding, ...rest }: SkeletonProps): ReactElement => (
	<SkeletonComponent {...rest}>
		<Box
			p={padding}
			backgroundColor={`yellow.${rest.colorMode === 'light' ? 500 : 400}`}
			borderRadius={rest.type === 'rectangle' ? 'base' : rest.type === 'text' ? 'xs' : 'full'}
		/>
	</SkeletonComponent>
);
