import classes from '@common/classes';
import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { ThemeRadiusArr } from '@common/types';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ } from './common/constants';
import type { SkeletonProps } from './common/types';
import type { SkeletonStory, SkeletonStoryMeta } from './common/types/story';
import { Skeleton as SkeletonComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

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
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		}
	}
} as SkeletonStoryMeta;

export const Skeleton: SkeletonStory = (props: SkeletonProps<any>): JSX.Element => {
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
