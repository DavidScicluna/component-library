/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';
import Center from '../Center';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import { SpaceProps } from './common/types';
import { SpaceStory, SpaceStoryMeta } from './common/types/story';
import SpaceComponent from '.';

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

export const Space: SpaceStory = (props: SpaceProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center spacing={0}>
			<Center className={classNames(radius, text, background, padding)}>
				<h6>Hello</h6>
			</Center>

			<SpaceComponent {...props} />

			<Center className={classNames(radius, text, background, padding)}>
				<h6>Hello</h6>
			</Center>
		</Center>
	);
};
