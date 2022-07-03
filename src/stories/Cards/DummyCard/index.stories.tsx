import { ReactElement } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import { range } from 'lodash';

import { Meta, Story } from './types';

import {
	CardColor,
	CardVariant,
	DummyCardProps,
	DummyCard as DummyCardComponent,
	DummyCardHeader,
	CardBody,
	CardFooter,
	DummyButton,
	Skeleton
} from '../../..';
import {
	color as defaultColor,
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
	title: 'Cards/Dummy Card',
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
		colorMode: { ...controls.theme.colorMode },
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
				<DummyButton color='blue' colorMode={props.colorMode} size='xs'>
					Dummy Card Action
				</DummyButton>
			}
		/>
		<CardBody>
			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
				{range(4).map((_dummy, index) => (
					<Skeleton key={index} isLoaded={false} variant='text' sx={{ width: '100%', flex: 1 }}>
						<Text width='100%' align='left' fontSize='md' noOfLines={1}>
							Dummy Text
						</Text>
					</Skeleton>
				))}
			</VStack>
		</CardBody>
		<CardFooter>
			<DummyButton color='blue' colorMode={props.colorMode} isFullWidth size='xs' variant='text'>
				This is the Dummy Card Footer Action
			</DummyButton>
		</CardFooter>
	</DummyCardComponent>
);
