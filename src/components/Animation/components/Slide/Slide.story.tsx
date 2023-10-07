import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';
import { __DEFAULT_ANIMATION_IN__ } from '../../common/constants';

import type { SlideProps } from './common/types';
import type { SlideStory, SlideStoryMeta } from './common/types/story';
import { Slide as SlideComponent } from '.';

export default {
	title: 'Animation/Slide',
	component: SlideComponent,
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
} as SlideStoryMeta;

export const Slide: SlideStory = (props: SlideProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center w='auto'>
			<SlideComponent {...props}>
				<Center className={classNames(radius, text, background, padding)} w='100px' h='100px' />
			</SlideComponent>
		</Center>
	);
};
