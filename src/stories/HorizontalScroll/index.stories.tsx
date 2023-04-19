import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { range } from 'lodash-es';

import { HorizontalScroll as HorizontalScrollComponent, HorizontalScrollProps } from '../..';
import { isDisabled as defaultIsDisabled } from '../../components/HorizontalScroll/common/data/defaultPropValues';
import { RenderDividerProps } from '../../components/HorizontalScroll/types';
import spacing from '../../theme/foundations/spacing';
import controls from '../common/controls';
import parameters from '../common/parameters';

import { Meta, Story } from './types';

const renderMapping = Object.assign(
	{ none: undefined },
	...Object.entries(spacing).map(([key, value]) => {
		return {
			[key]: ({ padding }: RenderDividerProps) => <Box p={value || padding} />
		};
	})
);

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
		renderDivider: {
			name: 'Spacing',
			defaultValue: '1',
			// description: '',
			options: ['none', ...Object.keys(spacing)],
			mapping: { ...renderMapping },
			control: 'select'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const HorizontalScroll: Story = (props: HorizontalScrollProps): ReactElement => (
	<HorizontalScrollComponent {...props}>
		{range(0, 50).map((_dummy, index) => (
			<Box key={index} p={5} backgroundColor='teal.400' borderRadius='base' />
		))}
	</HorizontalScrollComponent>
);
