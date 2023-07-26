import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import { __DEFAULT_TRANSITION_IN__ } from '@components/Animation/common/constants';
import { Center } from '@components/Layout';

import type { SlideProps } from './common/types';
import type { SlideStory, SlideStoryMeta } from './common/types/story';
import SlideComponent from '.';

export default {
	title: 'Animation/Slide',
	component: SlideComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_TRANSITION_IN__,
			// description: '',
			control: { type: 'boolean' }
		}
		// transition,
		// transitionEnd,
	}
} as SlideStoryMeta;

export const Slide: SlideStory = (props: SlideProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center className={classNames('w-auto')}>
			<SlideComponent {...props}>
				<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
			</SlideComponent>
		</Center>
	);
};
