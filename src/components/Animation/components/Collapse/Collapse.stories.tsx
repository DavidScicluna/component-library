import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import { __DEFAULT_TRANSITION_IN__ } from '@components/Animation/common/constants';
import Center from '@components/Layout/Center';

import { __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__ } from './common/constants';
import type { CollapseProps } from './common/types';
import type { CollapseStory, CollapseStoryMeta } from './common/types/story';
import CollapseComponent from '.';

export default {
	title: 'Animation/Collapse',
	component: CollapseComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_TRANSITION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOpacityAnimated: {
			name: 'Opacity Animated',
			type: 'boolean',
			defaultValue: __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		}
		// transition,
		// transitionEnd,
	}
} as CollapseStoryMeta;

export const Collapse: CollapseStory = (props: CollapseProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center className={classNames('w-auto')}>
			<CollapseComponent {...props}>
				<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
			</CollapseComponent>
		</Center>
	);
};
