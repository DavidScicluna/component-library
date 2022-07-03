import { ReactElement } from 'react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

import { ButtonGroupProps, ButtonGroupSize, ButtonGroup as ButtonGroupComponent, IconButton, Icon } from '../../..';
import icons from '../../../common/data/icons';
import {
	isAttached as defaultIsAttached,
	size as defaultSize,
	spacing as defaultSpacing
} from '../../../components/Clickable/ButtonGroup/common/data/defaultPropValues';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

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
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const ButtonGroup: Story = (props: ButtonGroupProps): ReactElement => (
	<ButtonGroupComponent {...props}>
		<IconButton aria-label='IconButton01' color='green' size={props.size}>
			<Icon icon={sample(icons) || icons[0]} />
		</IconButton>
		<IconButton aria-label='IconButton02' color='green' size={props.size}>
			<Icon icon={sample(icons) || icons[50]} />
		</IconButton>
		<IconButton aria-label='IconButton03' color='green' size={props.size}>
			<Icon icon={sample(icons) || icons[100]} />
		</IconButton>
		<IconButton aria-label='IconButton04' color='green' size={props.size}>
			<Icon icon={sample(icons) || icons[150]} />
		</IconButton>
		<IconButton aria-label='IconButton04' color='green' size={props.size}>
			<Icon icon={sample(icons) || icons[200]} />
		</IconButton>
	</ButtonGroupComponent>
);
