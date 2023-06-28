import { ReactElement } from 'react';

import { Center } from '@chakra-ui/react';

import {
	AppColors,
	Badge,
	BadgeLabel,
	DummyButton
	// Indicator as IndicatorComponent, IndicatorColor, IndicatorProps
} from '../../..';
import { color as defaultColor } from '../../../common/default/props';
import IndicatorComponent from '../../../components/Overlay/Indicator';
import { IndicatorPosition, IndicatorProps } from '../../../components/Overlay/Indicator/common/types';
// import { gutter as defaultGutter } from '../../../components/Overlay/Indicator/common/default/props';
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

const defaultPosition: IndicatorPosition = 'top-end';
const positions: IndicatorPosition[] = [
	'top-start',
	'top-center',
	'top-end',
	'middle-start',
	'middle-center',
	'middle-end',
	'bottom-start',
	'bottom-center',
	'bottom-end'
];

export default {
	title: 'Overlay/Indicator',
	component: IndicatorComponent,
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
		position: {
			name: 'Position',
			type: 'string',
			defaultValue: defaultPosition,
			options: [...positions],
			// description: '',
			control: 'radio'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Indicator: Story = (props: IndicatorProps): ReactElement => (
	<Center p={6}>
		<IndicatorComponent
			{...props}
			renderIndicator={(props) => (
				<Badge {...props} isCompact size='xs'>
					<BadgeLabel>Badge</BadgeLabel>
				</Badge>
			)}
		>
			<DummyButton>Hello I am a Button</DummyButton>
		</IndicatorComponent>
	</Center>
);
