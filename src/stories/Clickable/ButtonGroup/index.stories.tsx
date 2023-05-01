import { ReactElement } from 'react';

import { sample } from 'lodash-es';

import {
	ButtonGroup as ButtonGroupComponent,
	ButtonGroupItem,
	ButtonGroupProps,
	IconButton,
	IconButtonIcon
} from '../../..';
import icons from '../../../common/data/icons';
import {
	isAttached as defaultIsAttached,
	isCompact as defaultIsCompact,
	isRound as defaultIsRound,
	spacing as defaultSpacing
} from '../../../components/Clickable/ButtonGroup/common/default/props';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

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
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: defaultIsCompact,
			// description: '',
			control: 'boolean'
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: defaultIsRound,
			// description: '',
			control: 'boolean'
		},
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing }
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const ButtonGroup: Story = (props: ButtonGroupProps): ReactElement => (
	<ButtonGroupComponent {...props}>
		<ButtonGroupItem index={0} total={5}>
			<IconButton aria-label='IconButton01' color='green'>
				<IconButtonIcon icon={sample(icons) || icons[0]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={1} total={5}>
			<IconButton aria-label='IconButton02' color='green'>
				<IconButtonIcon icon={sample(icons) || icons[50]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={2} total={5}>
			<IconButton aria-label='IconButton03' color='green'>
				<IconButtonIcon icon={sample(icons) || icons[100]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={3} total={5}>
			<IconButton aria-label='IconButton04' color='green'>
				<IconButtonIcon icon={sample(icons) || icons[150]} />
			</IconButton>
		</ButtonGroupItem>
		<ButtonGroupItem index={4} total={5}>
			<IconButton aria-label='IconButton04' color='green'>
				<IconButtonIcon icon={sample(icons) || icons[200]} />
			</IconButton>
		</ButtonGroupItem>
	</ButtonGroupComponent>
);
