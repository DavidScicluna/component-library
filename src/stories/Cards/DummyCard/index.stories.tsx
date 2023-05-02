import { ReactElement } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import { range } from 'lodash-es';

import {
	CardBody,
	CardColor,
	CardFooter,
	CardVariant,
	DummyButton,
	DummyCard as DummyCardComponent,
	DummyCardHeader,
	DummyCardProps,
	Skeleton
} from '../../..';
import {
	color as defaultColor,
	isDivisible as defaultIsDivisible,
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

const variantOptions: CardVariant[] = ['transparent', 'contained', 'light', 'outlined', 'monochrome'];

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
			<DummyButton color='blue' colorMode={props.colorMode} isFullWidth size='xs' variant='text'>
				This is the Dummy Card Footer Action
			</DummyButton>
		</CardFooter>
	</DummyCardComponent>
);
