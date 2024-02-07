import type { ReactElement } from 'react';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import { __DEFAULT_CENTER_SPACING__ } from './common/constants';
import type { CenterProps } from './common/types';
import type { CenterStory, CenterStoryMeta } from './common/types/story';
import { Center as CenterComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Layout/Center',
	component: CenterComponent,
	argTypes: {
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_CENTER_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as CenterStoryMeta;

export const Center: CenterStory = (props: CenterProps<any>): ReactElement => {
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
