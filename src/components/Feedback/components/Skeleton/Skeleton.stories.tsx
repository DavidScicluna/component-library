import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';
import type { RadiiArr } from '@common/types/theme';

import { Center } from '@components/Layout';
import Text from '@components/Typography/components/Text';

import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ } from './common/constants';
import type { SkeletonProps } from './common/types';
import type { SkeletonStory, SkeletonStoryMeta } from './common/types/story';
import { Skeleton as SkeletonComponent } from '.';

export default {
	title: 'Feedback/Skeleton',
	component: SkeletonComponent,
	argTypes: {
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: __DEFAULT_SKELETON_IS_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isLoaded: {
			name: 'Loaded',
			type: 'boolean',
			defaultValue: __DEFAULT_SKELETON_IS_LOADED__,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as RadiiArr,
			control: { type: 'radio' }
		}
	}
} as SkeletonStoryMeta;

export const Skeleton: SkeletonStory = (props: SkeletonProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.borderRadius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

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
