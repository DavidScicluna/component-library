import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';
import Center from '../../Layout/Center';
import { __DEFAULT_TRANSITION_IN__ } from '../common/constants';

import { RotateDirection, RotateProps } from './common/types';
import { RotateStory, RotateStoryMeta } from './common/types/story';
import RotateComponent from '.';

export default {
	title: 'Animation/Rotate',
	component: RotateComponent,
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
			options: ['left', 'right'] as RotateDirection[],
			control: { type: 'radio' }
		}
		// transition,
		// transitionEnd,
	}
} as RotateStoryMeta;

export const Rotate: RotateStory = (props: RotateProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<RotateComponent {...props}>
			<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
		</RotateComponent>
	);
};
