import classes from '../../common/classes';
import { useGetColor } from '../../common/hooks';

import { Center } from '../Layout';
import { Text } from '../Typography';
import React from 'react';
import { useStorybookContext } from '../Provider/components/StorybookProvider';

import type { VisuallyHiddenDefaultElement, VisuallyHiddenProps } from './common/types';
import type { VisuallyHiddenStory, VisuallyHiddenStoryMeta } from './common/types/story';
import { VisuallyHidden as VisuallyHiddenComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'VisuallyHidden',
	component: VisuallyHiddenComponent
} as VisuallyHiddenStoryMeta;

export const VisuallyHidden: VisuallyHiddenStory = (
	props: VisuallyHiddenProps<VisuallyHiddenDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<Center className={classNames(radius, background)} w='100%' p={4}>
			<Text align='center' color={text}>
				Learn more<VisuallyHiddenComponent {...props}> about the Solar System</VisuallyHiddenComponent>.
			</Text>
		</Center>
	);
};
