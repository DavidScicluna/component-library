import { ReactElement } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import { range } from 'lodash-es';

import {
	CollapsibleCard as CollapsibleCardComponent,
	CollapsibleCardBody,
	CollapsibleCardColor,
	CollapsibleCardFooter,
	CollapsibleCardHeader,
	CollapsibleCardProps,
	CollapsibleCardStack,
	CollapsibleCardVariant,
	DummyButton,
	Skeleton
} from '../../../..';
import { color as defaultColor } from '../../../../common/default/props';
import {
	isClickable as defaultIsClickable,
	isDisabled as defaultIsDisabled,
	isDivisible as defaultIsDivisible,
	isFixed as defaultIsFixed,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../../components/DataDisplay/Cards/common/default/props';
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
	'light_blue',
	'blue',
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
	title: 'Data Display/Collapsible Cards/Collapsible Card',
	component: CollapsibleCardComponent,
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
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: 'boolean'
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: defaultIsClickable,
			// description: '',
			control: 'boolean'
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		isDivisible: {
			name: 'Divisible',
			type: 'boolean',
			defaultValue: defaultIsDivisible,
			// description: '',
			control: 'boolean'
		},
		isFixed: {
			name: 'Fixed',
			type: 'boolean',
			defaultValue: defaultIsFixed,
			// description: '',
			control: 'boolean'
		},
		isOpen: {
			name: 'Open',
			type: 'boolean',
			defaultValue: true,
			// description: '',
			control: 'boolean'
		},
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

export const CollapsibleCard: Story = (props: CollapsibleCardProps): ReactElement => (
	<CollapsibleCardComponent {...props} width='100%'>
		<CollapsibleCardHeader
			renderTitle={(props) => <Text {...props}>Title</Text>}
			renderSubtitle={(props) => <Text {...props}>Subtitle</Text>}
		/>
		<CollapsibleCardStack>
			<CollapsibleCardBody>
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
			</CollapsibleCardBody>
			<CollapsibleCardFooter>
				<DummyButton color='light_blue' colorMode={props.colorMode} isFullWidth size='xs' variant='text'>
					This is the Dummy CollapsibleCard Footer Action
				</DummyButton>
			</CollapsibleCardFooter>
		</CollapsibleCardStack>
	</CollapsibleCardComponent>
);
