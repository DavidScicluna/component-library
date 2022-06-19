import { ReactElement } from 'react';

import { Box, Text } from '@chakra-ui/react';

import { range, toString } from 'lodash';

import { Meta, Story } from './types';

import {
	AccordionsColor,
	AccordionsProps,
	Accordions as AccordionsComponent,
	AccordionsPanel,
	Accordion,
	AccordionHeader,
	AccordionBody,
	AccordionFooter,
	AccordionType,
	QuickToggles
} from '../..';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isDisabled as defaultIsDisabled,
	spacing as defaultSpacing
} from '../../components/Accordions/common/data/defaultPropValues';
import controls from '../common/controls';

const accordions: AccordionType[] = range(0, 5).map((_dummy, index) => {
	return { id: toString(index), title: `Accordion ${++index}` } as AccordionType;
});

const colorOptions: AccordionsColor[] = [
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
	title: 'Accordions',
	component: AccordionsComponent,
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
		},
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing },
		padding: { ...controls.theme.padding, defaultValue: 2 }
		// margin: { ...controls.theme.margin },
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

export const Accordions: Story = (props: AccordionsProps): ReactElement => (
	<AccordionsComponent {...props} color='gray' accordions={accordions} p={0}>
		<QuickToggles color={props.color} />

		<AccordionsPanel>
			{accordions.map((accordion) => (
				<Accordion
					key={accordion.id}
					id={accordion.id}
					header={
						<AccordionHeader
							renderTitle={(props) => <Text {...props}>{`${accordion.title} Title`}</Text>}
							renderSubtitle={(props) => <Text {...props}>{`${accordion.title} Subtitle`}</Text>}
							actions={
								<Box
									width='87.7px'
									height='42px'
									backgroundColor={`${props.color}.${props.colorMode === 'light' ? 200 : 700}`}
									borderRadius='base'
								/>
							}
						/>
					}
					body={
						<AccordionBody>
							<Box
								width='100%'
								p={4}
								backgroundColor={`${props.color}.${props.colorMode === 'light' ? 400 : 500}`}
								borderRadius='base'
							/>
						</AccordionBody>
					}
					footer={
						<AccordionFooter>
							<Box
								width='100%'
								p={4}
								backgroundColor={`${props.color}.${props.colorMode === 'light' ? 300 : 600}`}
								borderRadius='base'
							/>
						</AccordionFooter>
					}
					spacing={2}
					p={props.padding}
				/>
			))}
		</AccordionsPanel>
	</AccordionsComponent>
);
