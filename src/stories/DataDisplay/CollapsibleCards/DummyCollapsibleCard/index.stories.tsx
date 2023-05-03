import { ReactElement } from 'react';

import {
	CollapsibleCardColor,
	CollapsibleCardVariant,
	DummyCollapsibleCard as DummyCollapsibleCardComponent,
	DummyCollapsibleCardProps
} from '../../../..';
import { color as defaultColor } from '../../../../common/default/props';
import {
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../../components/DataDisplay/CollapsibleCards/common/default/props';
import controls from '../../../common/controls';
import parameters from '../../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: CollapsibleCardColor[] = [
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

const variantOptions: CollapsibleCardVariant[] = ['transparent', 'contained', 'light', 'outlined', 'monochrome'];

export default {
	title: 'Data Display/Collapsible Cards/Dummy Collapsible Card',
	component: DummyCollapsibleCardComponent,
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
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing },
		padding: { ...controls.theme.padding, defaultValue: defaultSpacing },
		margin: { ...controls.theme.margin },
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: defaultVariant,
			// description: '',
			options: [...variantOptions],
			control: 'select'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const DummyCollapsibleCard: Story = (props: DummyCollapsibleCardProps): ReactElement => (
	<DummyCollapsibleCardComponent {...props} />
);
