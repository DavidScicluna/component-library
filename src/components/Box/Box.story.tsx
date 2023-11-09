import type { ElementType, ReactElement } from 'react';

import classes from '@common/classes';
import { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../.storybook/preview';

import type { BoxProps } from './common/types';
import type { BoxStory, BoxStoryMeta } from './common/types/story';
import { Box as BoxComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Box',
	component: BoxComponent,
	argTypes: {
		as: {
			name: 'As',
			type: 'string',
			defaultValue: __DEFAULT_POLYMORPHIC_ELEMENT__,
			description: 'The component used for the root node. Either a string to use an HTML element or a component.',
			options: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as Array<ElementType>,
			control: { type: 'select' }
		},
		sx: {
			name: 'Sx',
			type: 'string',
			defaultValue: __DEFAULT_POLYMORPHIC_SX__,
			description:
				'The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles',
			control: { type: 'object' }
		}
	}
} as BoxStoryMeta;

export const Box: BoxStory = (props: BoxProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<BoxComponent {...props} className={classNames(radius, background)} w='100%' p={4}>
			<Text align='center' color={text}>
				Hello
			</Text>
		</BoxComponent>
	);
};
