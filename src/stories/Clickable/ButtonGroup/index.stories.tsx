import { ReactElement } from 'react';

import { sample } from 'lodash';

import {
	ButtonGroupProps,
	ButtonGroupSize,
	ButtonGroup as ButtonGroupComponent,
	ButtonGroupItem,
	IconButton,
	IconButtonIcon
} from '../../..';
import icons from '../../../common/data/icons';
import {
	isAttached as defaultIsAttached,
	size as defaultSize,
	spacing as defaultSpacing
} from '../../../components/Clickable/ButtonGroup/common/data/defaultPropValues';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

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
		<ButtonGroupItem index={0} total={5}>
			<IconButton aria-label='IconButton01' color='green' size={props.size}>
				<IconButtonIcon icon={sample(icons) || icons[0]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={1} total={5}>
			<IconButton aria-label='IconButton02' color='green' size={props.size}>
				<IconButtonIcon icon={sample(icons) || icons[50]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={2} total={5}>
			<IconButton aria-label='IconButton03' color='green' size={props.size}>
				<IconButtonIcon icon={sample(icons) || icons[100]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={3} total={5}>
			<IconButton aria-label='IconButton04' color='green' size={props.size}>
				<IconButtonIcon icon={sample(icons) || icons[150]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={4} total={5}>
			<IconButton aria-label='IconButton04' color='green' size={props.size}>
				<IconButtonIcon icon={sample(icons) || icons[200]} />
			</IconButton>
		</ButtonGroupItem>
	</ButtonGroupComponent>
);
