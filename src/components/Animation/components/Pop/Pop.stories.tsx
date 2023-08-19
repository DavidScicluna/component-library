import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '@components/Layout';

import { __DEFAULT_ANIMATION_IN__ } from '../../common/constants';

import { __DEFAULT_POP_INITIAL_SCALE__, __DEFAULT_POP_IS_REVERSED__ } from './common/constants';
import type { PopProps } from './common/types';
import type { PopStory, PopStoryMeta } from './common/types/story';
import { Pop as PopComponent } from '.';

export default {
	title: 'Animation/Pop',
	component: PopComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_ANIMATION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		initialScale: {
			name: 'Initial Scale',
			type: 'number',
			defaultValue: __DEFAULT_POP_INITIAL_SCALE__,
			// description: '',
			control: { type: 'number' }
		},
		isReversed: {
			name: 'Reversed',
			type: 'boolean',
			defaultValue: __DEFAULT_POP_IS_REVERSED__,
			// description: '',
			control: { type: 'boolean' }
		}
		// transition,
		// transitionEnd,
	}
} as PopStoryMeta;

export const Pop: PopStory = (props: PopProps<PolymorphicDefaultElement>): ReactElement => {
	const radius = classes.borders.borderRadius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center className={classNames('w-auto')}>
			<PopComponent {...props}>
				<Center className={classNames('w-20', 'h-20', radius, text, background, padding)} />
			</PopComponent>
		</Center>
	);
};
