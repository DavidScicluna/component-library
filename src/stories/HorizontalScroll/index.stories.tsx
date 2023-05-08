import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { range } from 'lodash-es';

import { HorizontalScroll as HorizontalScrollComponent, HorizontalScrollProps, HorizontalScrollVariant } from '../..';
import {
	isDisabled as defaultIsDisabled,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../components/HorizontalScroll/common/default/props';
import controls from '../common/controls';
import parameters from '../common/parameters';

import { Meta, Story } from './types';

const variantOptions: HorizontalScrollVariant[] = ['right', 'left', 'overlay'];

export default {
	title: 'HorizontalScroll',
	component: HorizontalScrollComponent,
	argTypes: {
		colorMode: { ...controls.theme.colorMode },
		width: { ...controls.common.width },
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing },
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: defaultVariant,
			// description: '',
			options: [...variantOptions],
			control: 'radio'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const HorizontalScroll: Story = (props: HorizontalScrollProps): ReactElement => (
	<HorizontalScrollComponent {...props} renderDivider={() => <Box p={props.spacing} />}>
		{range(0, 50).map((_dummy, index) => (
			<Box key={index} p={5} backgroundColor='teal.400' borderRadius='base' />
		))}
	</HorizontalScrollComponent>
);
