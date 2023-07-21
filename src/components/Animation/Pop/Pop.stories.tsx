import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';
import Center from '../../Layout/Center';
import { __DEFAULT_TRANSITION_IN__ } from '../common/constants';

import { PopProps, PopXAxis, PopYAxis } from './common/types';
import { PopStory, PopStoryMeta } from './common/types/story';
import PopComponent from '.';

export default {
	title: 'Animation/Pop',
	component: PopComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_TRANSITION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		xaxis: {
			name: 'X-Axis',
			type: 'string',
			defaultValue: 'default',
			// description: '',
			options: ['none', 'left', 'right'] as ('none' | PopXAxis)[],
			control: { type: 'radio' }
		},
		yaxis: {
			name: 'Y-Axis',
			type: 'string',
			defaultValue: 'default',
			// description: '',
			options: ['none', 'top', 'bottom'] as ('none' | PopYAxis)[],
			control: { type: 'radio' }
		}
		// transition,
		// transitionEnd,
	}
} as PopStoryMeta;

export const Pop: PopStory = (props: PopProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<PopComponent {...props}>
			<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
		</PopComponent>
	);
};
