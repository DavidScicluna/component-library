import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';
import { __DEFAULT_ANIMATION_IN__ } from '../../common/constants';

import type { FadeProps } from './common/types';
import type { FadeStory, FadeStoryMeta } from './common/types/story';
import { Fade as FadeComponent } from '.';

export default {
	title: 'Animation/Fade',
	component: FadeComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_ANIMATION_IN__,
			// description: '',
			control: { type: 'boolean' }
		}
		// transition,
		// transitionEnd,
	}
} as FadeStoryMeta;

export const Fade: FadeStory = (props: FadeProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center w='auto'>
			<FadeComponent {...props}>
				<Center className={classNames(radius, text, background, padding)} w='100px' h='100px' />
			</FadeComponent>
		</Center>
	);
};
