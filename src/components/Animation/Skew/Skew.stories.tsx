import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';
import Center from '../../Layout/Center';
import { __DEFAULT_TRANSITION_IN__ } from '../common/constants';

import { SkewDirection, SkewProps } from './common/types';
import { SkewStory, SkewStoryMeta } from './common/types/story';
import SkewComponent from '.';

export default {
	title: 'Animation/Skew',
	component: SkewComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_TRANSITION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		diraction: {
			name: 'Diraction',
			type: 'string',
			defaultValue: 'up',
			// description: '',
			options: ['up', 'down'] as SkewDirection[],
			control: { type: 'radio' }
		}
		// transition,
		// transitionEnd,
	}
} as SkewStoryMeta;

export const Skew: SkewStory = (props: SkewProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<SkewComponent {...props}>
			<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
		</SkewComponent>
	);
};
