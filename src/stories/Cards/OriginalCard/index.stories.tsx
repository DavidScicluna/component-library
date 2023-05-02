import { ReactElement } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import { range } from 'lodash-es';

import {
	Card as CardComponent,
	CardBody,
	CardColor,
	CardFooter,
	CardHeader,
	CardProps,
	CardVariant,
	DummyButton,
	Skeleton
} from '../../..';
import {
	color as defaultColor,
	isClickable as defaultIsClickable,
	isDisabled as defaultIsDisabled,
	isDivisible as defaultIsDivisible,
	isFixed as defaultIsFixed,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../components/DataDisplay/Cards/common/default/props';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: CardColor[] = [
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

const variantOptions: CardVariant[] = ['transparent', 'contained', 'light', 'outlined', 'monochrome'];

export default {
	title: 'Cards/Card',
	component: CardComponent,
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
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: defaultIsClickable,
			// description: '',
			control: 'boolean'
		},
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: false,
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

export const Card: Story = (props: CardProps): ReactElement => (
	<CardComponent {...props}>
		<CardHeader
			renderTitle={(props) => <Text {...props}>Title</Text>}
			renderSubtitle={(props) => <Text {...props}>Subtitle</Text>}
			actions={
				<DummyButton color='light_blue' colorMode={props.colorMode} size='xs'>
					Dummy Card Action
				</DummyButton>
			}
		/>
		<CardBody>
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
		</CardBody>
		<CardFooter>
			<DummyButton color='light_blue' colorMode={props.colorMode} isFullWidth size='xs' variant='text'>
				This is the Dummy Card Footer Action
			</DummyButton>
		</CardFooter>
	</CardComponent>
);
