import { ReactElement } from 'react';

import { range } from 'lodash-es';

import {
	DummyAccordion,
	DummyAccordions as DummyAccordionsComponent,
	DummyAccordionsPanel,
	DummyAccordionsProps,
	DummyAccordionsQuickToggles,
	DummyButton
} from '../../..';
import { color as defaultColor } from '../../../common/default/props';
import { AppColors } from '../../../common/types';
import { spacing as defaultSpacing } from '../../../components/Accordions/common/default/props';
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

export default {
	title: 'Accordions/DummyAccordions',
	component: DummyAccordionsComponent,
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
		padding: { ...controls.theme.padding, defaultValue: 2 }
		// margin: { ...controls.theme.margin },
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const DummyAccordions: Story = (props: DummyAccordionsProps): ReactElement => (
	<DummyAccordionsComponent
		{...props}
		color='gray'
		accordions={range(0, 15).map((accordion) => ({ id: accordion, title: '', subtitle: '' }))}
		p={0}
	>
		<DummyAccordionsQuickToggles color={props.color === 'gray' ? 'orange' : props.color} spacing={2} />

		<DummyAccordionsPanel>
			{({ accordions }) =>
				accordions.map((accordion) => (
					<DummyAccordion
						key={accordion.id}
						id={accordion.id}
						title={`${accordion.title} Title`}
						subtitle={`${accordion.title} Subtitle`}
						actions={
							<DummyButton
								color={props.color === 'gray' ? 'orange' : props.color}
								colorMode={props.colorMode}
								size='xs'
							>
								Dummy Action
							</DummyButton>
						}
						p={props.padding}
					/>
				))
			}
		</DummyAccordionsPanel>
	</DummyAccordionsComponent>
);
