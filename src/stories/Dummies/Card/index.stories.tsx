import { ReactElement } from 'react';

import { Meta, Story } from './types';

import {
	CardColor,
	CardVariant,
	DummyCardProps,
	DummyCard as DummyCardComponent,
	DummyCardHeader,
	DummyButton
} from '../../..';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isDivisible as defaultIsDivisible,
	isLight as defaultIsLight,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../components/Cards/common/data/defaultPropValues';
import controls from '../../common/controls';

const colorOptions: CardColor[] = [
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

const variantOptions: CardVariant[] = ['contained', 'outlined', 'transparent'];

export default {
	title: 'Dummies/Dummy Card',
	component: DummyCardComponent,
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
		isDivisible: {
			name: 'Divisible',
			type: 'boolean',
			defaultValue: defaultIsDivisible,
			// description: '',
			control: 'boolean'
		},
		isLight: {
			name: 'Light',
			type: 'boolean',
			defaultValue: defaultIsLight,
			// description: '',
			control: 'boolean'
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: defaultIsFullWidth,
			// description: '',
			control: 'boolean'
		},
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing },
		padding: { ...controls.theme.padding, defaultValue: 2 },
		margin: { ...controls.theme.margin },
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: defaultVariant,
			// description: '',
			options: [...variantOptions],
			control: 'select'
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

export const DummyCard: Story = (props: DummyCardProps): ReactElement => (
	<DummyCardComponent {...props}>
		<DummyCardHeader
			hasTitle
			hasSubtitle
			actions={
				<DummyButton colorMode={props.colorMode} size='xs'>
					Dummy Card Action
				</DummyButton>
			}
		/>
	</DummyCardComponent>
);
