import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { range } from 'lodash';

import { Meta, Story } from './types';

import { HorizontalScrollProps, HorizontalScroll as HorizontalScrollComponent } from '../..';
import {
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth
} from '../../components/HorizontalScroll/common/data/defaultPropValues';
import controls from '../common/controls';

export default {
	title: 'HorizontalScroll',
	component: HorizontalScrollComponent,
	argTypes: {
		colorMode: { ...controls.theme.colorMode },
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

export const HorizontalScroll: Story = (props: HorizontalScrollProps): ReactElement => (
	<HorizontalScrollComponent {...props}>
		{range(0, 50).map((_dummy, index) => (
			<Box key={index} p={5} backgroundColor='teal.400' borderRadius='base' />
		))}
	</HorizontalScrollComponent>
);
