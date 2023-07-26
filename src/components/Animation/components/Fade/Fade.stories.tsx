import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import { __DEFAULT_TRANSITION_IN__ } from '@components/Animation/common/constants';
import { Center } from '@components/Layout';

import type { FadeProps } from './common/types';
import type { FadeStory, FadeStoryMeta } from './common/types/story';
import FadeComponent from '.';

export default {
	title: 'Animation/Fade',
	component: FadeComponent,
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
} as FadeStoryMeta;

export const Fade: FadeStory = (props: FadeProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center className={classNames('w-auto')}>
			<FadeComponent {...props}>
				<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
			</FadeComponent>
		</Center>
	);
};
