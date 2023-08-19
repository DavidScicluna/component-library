import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '@components/Layout';

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
	const radius = classes.borders.borderRadius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center className={classNames('w-auto')}>
			<FadeComponent {...props}>
				<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
			</FadeComponent>
		</Center>
	);
};
