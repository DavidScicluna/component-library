import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';
import Center from '../../Layout/Center';
import { __DEFAULT_TRANSITION_IN__ } from '../common/constants';

import { __DEFAULT_SCALE_INITIAL_SCALE__, __DEFAULT_SCALE_IS_REVERSED__ } from './common/constants';
import { ScaleProps } from './common/types';
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
		initialScale: {
			name: 'Initial Scale',
			type: 'number',
			defaultValue: __DEFAULT_SCALE_INITIAL_SCALE__,
			// description: '',
			control: { type: 'number' }
		},
		isReversed: {
			name: 'Reversed',
			type: 'boolean',
			defaultValue: __DEFAULT_SCALE_IS_REVERSED__,
			// description: '',
			control: { type: 'boolean' }
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
		<Center className={classNames('w-auto')}>
			<ScaleComponent {...props}>
				<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
			</ScaleComponent>
		</Center>
	);
};
