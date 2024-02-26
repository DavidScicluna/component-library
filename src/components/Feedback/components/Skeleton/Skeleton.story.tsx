import classes from '../../../../common/classes';
import { DEFAULT_RADIUS } from '../../../../common/constants';
import { useGetColor } from '../../../../common/hooks';
import type { PolymorphicDefaultElement, ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';
import { Text } from '../../../Typography';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { DEFAULT_SKELETON_IS_ANIMATED, DEFAULT_SKELETON_IS_LOADED } from './common/constants';
import type { SkeletonProps } from './common/types';
import type { SkeletonStory, SkeletonStoryMeta } from './common/types/story';
import { Skeleton as SkeletonComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Feedback/Skeleton',
	component: SkeletonComponent,
	argTypes: {
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: DEFAULT_SKELETON_IS_ANIMATED,
			// description: '',
			control: { type: 'boolean' }
		},
		isLoaded: {
			name: 'Loaded',
			type: 'boolean',
			defaultValue: DEFAULT_SKELETON_IS_LOADED,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		}
	}
} as SkeletonStoryMeta;

export const Skeleton: SkeletonStory = (props: SkeletonProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<SkeletonComponent {...props} className={classNames(radius)} color={color} colorMode={colorMode} w='100%'>
			<Center className={classNames(background)} w='100%' h='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</SkeletonComponent>
	);
};
