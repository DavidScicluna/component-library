/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import { Center } from '@components/Layout';
import Text from '@components/Typography/components/Text';

import {
	__DEFAULT_SKELETON_IS_ANIMATED__,
	__DEFAULT_SKELETON_IS_LOADED__,
	__DEFAULT_SKELETON_VARIANT__
} from './common/constants';
import type { SkeletonProps, SkeletonVariant } from './common/types';
import type { SkeletonStory, SkeletonStoryMeta } from './common/types/story';
import SkeletonComponent from '.';

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
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_SKELETON_VARIANT__,
			// description: '',
			options: ['rectangle', 'circle', 'text'] as SkeletonVariant[],
			control: { type: 'radio' }
		}
	}
} as SkeletonStoryMeta;

export const Skeleton: SkeletonStory = (props: SkeletonProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<SkeletonComponent {...props} className={classNames('w-full', radius)} color='blue'>
			<Center className={classNames('w-full', 'h-40', background, padding)}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</SkeletonComponent>
	);
};
