import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import { Center } from '../Center';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import type { SpaceProps } from './common/types';
import type { SpaceStory, SpaceStoryMeta } from './common/types/story';
import { Space as SpaceComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Layout/Space',
	component: SpaceComponent,
	argTypes: {
		width: {
			name: 'Width',
			type: 'number',
			defaultValue: __DEFAULT_SPACE_WIDTH__,
			// description: '',
			control: { type: 'number' }
		},
		height: {
			name: 'Height',
			type: 'number',
			defaultValue: __DEFAULT_SPACE_HEIGHT__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as SpaceStoryMeta;

export const Space: SpaceStory = (props: SpaceProps<any>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<Center spacing={0}>
			<Center className={classNames(radius, background)} p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>

			<SpaceComponent {...props} />

			<Center className={classNames(radius, background)} p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</Center>
	);
};
