import theme from '@common/theme';
import type { AnimationDelay, AnimationDuration, AnimationEasing } from '@common/types';
import { convertStringToNumber } from '@common/utils';

import { __DEFAULT_DELAY__, __DEFAULT_DURATION__, __DEFAULT_EASING__ } from './classes';

export const __DEFAULT_ANIMATION_DELAY__: AnimationDelay =
	convertStringToNumber(theme.transitionDuration[__DEFAULT_DELAY__], 'ms') / 1000;
export const __DEFAULT_ANIMATION_DURATION__: AnimationDuration =
	convertStringToNumber(theme.transitionDuration[__DEFAULT_DURATION__], 'ms') / 1000;
export const __DEFAULT_ANIMATION_EASING__: AnimationEasing = theme.transitionTimingFunction[__DEFAULT_EASING__]
	.replace('cubic-bezier', '')
	.replace('(', '')
	.replace(')', '')
	.replace(' ', '')
	.split(',')
	.map((number: string) => Number(number));
