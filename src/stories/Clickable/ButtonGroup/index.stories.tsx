import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { Meta, Story } from './types';

import { ButtonGroupProps, ButtonGroupSize, ButtonGroup as ButtonGroupComponent } from '../../..';
import {
	isAttached as defaultIsAttached,
	size as defaultSize,
	spacing as defaultSpacing
} from '../../../components/Clickable/ButtonGroup/common/data/defaultPropValues';
import controls from '../../common/controls';

const sizeOptions: ButtonGroupSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Clickable/Button Group',
	component: ButtonGroupComponent,
	argTypes: {
		isAttached: {
			name: 'Attached',
			type: 'boolean',
			defaultValue: defaultIsAttached,
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
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing }
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

export const ButtonGroup: Story = (props: ButtonGroupProps): ReactElement => (
	<ButtonGroupComponent {...props}>
		<Box backgroundColor='green.200' p={3} />
		<Box backgroundColor='green.300' p={3} />
		<Box backgroundColor='green.400' p={3} />
		<Box backgroundColor='green.500' p={3} />
		<Box backgroundColor='green.600' p={3} />
	</ButtonGroupComponent>
);
