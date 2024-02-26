import classes from '../../../../common/classes';
import { useGetColor } from '../../../../common/hooks';

import { Text } from '../../../Typography';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { DEFAULT_CENTER_SPACING } from './common/constants';
import type { CenterProps } from './common/types';
import type { CenterStory, CenterStoryMeta } from './common/types/story';
import { Center as CenterComponent } from '.';

import classNames from 'classnames';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Layout/Center',
	component: CenterComponent,
	argTypes: {
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_CENTER_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as CenterStoryMeta;

export const Center: CenterStory = (props: CenterProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<CenterComponent {...props} className={classNames(radius, background)} w='100%' p={4}>
			<Text align='center' color={text}>
				Hello
			</Text>
			<Text align='center' color={text}>
				Hello
			</Text>
		</CenterComponent>
	);
};
