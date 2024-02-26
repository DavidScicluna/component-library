import React from 'react';
import classes from '../../../../common/classes';
import { __DEFAULT_DURATION__, __DEFAULT_EASING__ } from '../../../../common/constants';
import { useGetColor } from '../../../../common/hooks';
import type {
	PolymorphicDefaultElement,
	ThemeDelayArr,
	ThemeDurationArr,
	ThemeEaseArr
} from '../../../../common/types';

import { AspectRatio } from '../../../Layout';

import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from './common/constants';
import type { TransitionKey, TransitionProps } from './common/types';
import type { TransitionStory, TransitionStoryMeta } from './common/types/story';
import { Transition as TransitionComponent } from '.';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import classNames from 'classnames';

export default {
	title: 'Animation/Transition',
	component: TransitionComponent,
	argTypes: {
		delay: {
			name: 'Delay',
			type: 'string',
			// description: '',
			options: ['ultra-fast', 'faster', 'fast', 'normal', 'slow', 'slower', 'ultra-slow'] as ThemeDelayArr,
			control: { type: 'radio' }
		},
		duration: {
			name: 'Duration',
			type: 'string',
			defaultValue: __DEFAULT_DURATION__,
			// description: '',
			options: ['ultra-fast', 'faster', 'fast', 'normal', 'slow', 'slower', 'ultra-slow'] as ThemeDurationArr,
			control: { type: 'radio' }
		},
		easing: {
			name: 'Easing',
			type: 'string',
			defaultValue: __DEFAULT_EASING__,
			// description: '',
			options: ['linear', 'ease-in', 'ease-out', 'ease-in-out'] as ThemeEaseArr,
			control: { type: 'radio' }
		},
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_TRANSITION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		transition: {
			name: 'Transition',
			type: 'string',
			defaultValue: __DEFAULT_TRANSITION__,
			// description: '',
			options: [
				'fade',
				'collapse',
				'skew-up',
				'skew-down',
				'rotate-right',
				'rotate-left',
				'slide-down',
				'slide-up',
				'slide-right',
				'slide-left',
				'scale-y',
				'scale-x',
				'scale',
				'pop',
				'pop-top-left',
				'pop-top-right',
				'pop-bottom-left',
				'pop-bottom-right'
			] as Array<TransitionKey>,
			control: { type: 'radio' }
		},
		unmountOnExit: {
			name: 'Unmount On Exit',
			type: 'boolean',
			defaultValue: __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as TransitionStoryMeta;

export const Transition: TransitionStory = (props: TransitionProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<AspectRatio w='100%' maxW='250px' ratio='square'>
			<TransitionComponent {...props} className={classNames(radius, text, background, padding)} w='250px' />
		</AspectRatio>
	);
};
