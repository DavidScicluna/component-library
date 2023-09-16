import type { ReactElement } from 'react';

import classNames from 'classnames';
import { range } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';
import { Center } from '@components/Layout';
import { Text } from '@components/Typography/components/Text';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_HORIZONTAL_SCROLL_VARIANT__ } from './common/constants';
import type { HorizontalScrollProps, HorizontalScrollVariant } from './common/types';
import type { HorizontalScrollStory, HorizontalScrollStoryMeta } from './common/types/story';
import { HorizontalScroll as HorizontalScrollComponent } from '.';

const items = range(20);

export default {
	title: 'Data Display/HorizontalScroll',
	component: HorizontalScrollComponent,
	argTypes: {
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_HORIZONTAL_SCROLL_VARIANT__,
			// description: '',
			options: ['left', 'right', 'hidden', 'overlay'] as Array<HorizontalScrollVariant>,
			control: { type: 'radio' }
		}
	}
} as HorizontalScrollStoryMeta;

export const HorizontalScroll: HorizontalScrollStory = (
	props: HorizontalScrollProps<PolymorphicDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });
	const border = useGetColor({ colorType: 'color', hueType: 'divider', classType: 'border' });

	return (
		<HorizontalScrollComponent
			{...props}
			className={classNames(border)}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			renderDivider={(spacing) => <Box pr={spacing} />}
		>
			{items.map((item, index) => (
				<Center key={item} className={classNames(background)} p={4}>
					<Text align='center' color={text}>
						{`Item ${index + 1}`}
					</Text>
				</Center>
			))}
		</HorizontalScrollComponent>
	);
};
