import React, { ReactElement } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import { range, toString } from 'lodash-es';

import {
	Accordion,
	Accordions as AccordionsComponent,
	AccordionsPanel,
	AccordionsProps,
	AccordionsQuickToggles,
	DummyButton,
	Skeleton
} from '../../..';
import { color as defaultColor } from '../../../common/default/props';
import { AppColors } from '../../../common/types';
import { spacing as defaultSpacing } from '../../../components/Accordions/common/default/props';
import { isDisabled as defaultIsDisabled } from '../../../components/Accordions/OriginalAccordions/common/default/props';
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
	title: 'Accordions/Accordions',
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
		colorMode: { ...controls.theme.colorMode },
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing },
		padding: { ...controls.theme.padding, defaultValue: 2 }
		// margin: { ...controls.theme.margin },
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Accordions: Story = (props: AccordionsProps<unknown>): ReactElement => (
	<AccordionsComponent
		{...props}
		color='gray'
		accordions={range(0, 15).map((_dummy, index) => {
			return { id: toString(index), title: `Accordion ${++index}`, data: {} };
		})}
		p={0}
	>
		<AccordionsQuickToggles color={props.color === 'gray' ? 'deep_orange' : props.color} spacing={2} />
		<AccordionsPanel>
			{({ accordions }) =>
				accordions.map((accordion) => (
					<Accordion
						key={accordion.id}
						id={accordion.id}
						title={`${accordion.title} Title`}
						subtitle={`${accordion.title} Subtitle`}
						isOpen={false}
						onOpen={() => undefined}
						actions={
							<DummyButton
								color={props.color === 'gray' ? 'orange' : props.color}
								colorMode={props.colorMode}
								size='xs'
							>
								Dummy Card Action
							</DummyButton>
						}
						footer={
							<DummyButton
								color={props.color === 'gray' ? 'orange' : props.color}
								colorMode={props.colorMode}
								isFullWidth
								size='xs'
								variant='text'
							>
								Footer Action
							</DummyButton>
						}
						spacing={2}
						p={props.padding}
					>
						<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
							{range(2).map((_dummy, index) => (
								<Skeleton
									key={index}
									colorMode={props.colorMode}
									isLoaded={false}
									variant='text'
									sx={{ width: '100%', flex: 1 }}
								>
									<Text width='100%' align='left' fontSize='md' noOfLines={1}>
										Dummy Text
									</Text>
								</Skeleton>
							))}
						</VStack>
					</Accordion>
				))
			}
		</AccordionsPanel>
	</AccordionsComponent>
);
