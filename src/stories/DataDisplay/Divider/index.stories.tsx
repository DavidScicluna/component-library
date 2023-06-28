import { ReactElement } from 'react';

import { Center } from '@chakra-ui/react';

import { Divider as DividerComponent, DividerProps, DividerVariant } from '../../..';
import { color as defaultColor } from '../../../common/default/props';
import { AppColors } from '../../../common/types';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: AppColors = [
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

const variantOptions: DividerVariant[] = ['dotted', 'dashed', 'solid'];

export default {
	title: 'Data Display/Divider',
	component: DividerComponent,
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
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: 'solid',
			// description: '',
			options: [...variantOptions],
			control: 'select'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Divider: Story = (props: DividerProps): ReactElement => (
	<Center width='100%' height='100%' flexDirection={props.orientation === 'vertical' ? 'column' : 'row'}>
		<DividerComponent {...props}>Hello</DividerComponent>
	</Center>
);
