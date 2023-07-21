import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';
import Center from '../../Layout/Center';
import { __DEFAULT_TRANSITION_IN__ } from '../common/constants';

import { ScaleAxis, ScaleProps } from './common/types';
import { ScaleStory, ScaleStoryMeta } from './common/types/story';
import ScaleComponent from '.';

export default {
	title: 'Animation/Scale',
	component: ScaleComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_TRANSITION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		axis: {
			name: 'Axis',
			type: 'string',
			defaultValue: 'default',
			// description: '',
			options: ['default', 'x', 'y'] as ('default' | ScaleAxis)[],
			control: { type: 'radio' }
		}
		// transition,
		// transitionEnd,
	}
} as ScaleStoryMeta;

export const Scale: ScaleStory = (props: ScaleProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<ScaleComponent {...props}>
			<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
		</ScaleComponent>
	);
};
