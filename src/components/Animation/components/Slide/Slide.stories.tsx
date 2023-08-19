import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '@components/Layout';

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
	const radius = classes.borders.borderRadius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center className={classNames('w-auto')}>
			<SlideComponent {...props}>
				<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
			</SlideComponent>
		</Center>
	);
};
