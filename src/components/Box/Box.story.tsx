import React from 'react';
import classes from '../../common/classes';
import { DEFAULT_POLYMORPHIC_ELEMENT, DEFAULT_POLYMORPHIC_SX } from '../../common/constants';
import { useGetColor } from '../../common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '../../common/types';

import { Text } from '../Typography';

import { useStorybookContext } from '../Provider/components/StorybookProvider';

import type { BoxProps } from './common/types';
import type { BoxStory, BoxStoryMeta } from './common/types/story';
import { Box as BoxComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Box',
	component: BoxComponent,
	argTypes: {
		as: {
			name: 'As',
			type: 'string',
			defaultValue: DEFAULT_POLYMORPHIC_ELEMENT,
			description: 'The component used for the root node. Either a string to use an HTML element or a component.',
			options: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as Array<PolymorphicElementType>,
			control: { type: 'select' }
		},
		sx: {
			name: 'Sx',
			type: 'string',
			defaultValue: DEFAULT_POLYMORPHIC_SX,
			description:
				'The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles',
			control: { type: 'object' }
		}
	}
} as BoxStoryMeta;

export const Box: BoxStory = (props: BoxProps<PolymorphicDefaultElement>): JSX.Element => {
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
