import theme from '@common/theme';
import type { AnimationDelay, AnimationDuration, AnimationEasing } from '@common/types';
import { convertStringToNumber } from '@common/utils';

import { DEFAULT_DELAY, DEFAULT_DURATION, DEFAULT_EASING } from './classes';

export const DEFAULT_ANIMATION_DELAY: AnimationDelay =
	convertStringToNumber(theme.transitionDuration[DEFAULT_DELAY], 'ms') / 1000;
export const DEFAULT_ANIMATION_DURATION: AnimationDuration =
	convertStringToNumber(theme.transitionDuration[DEFAULT_DURATION], 'ms') / 1000;
export const DEFAULT_ANIMATION_EASING: AnimationEasing = theme.transitionTimingFunction[DEFAULT_EASING].replace(
	'cubic-bezier',
	''
)
	.replace('(', '')
	.replace(')', '')
	.replace(' ', '')
	.split(',')
	.map((number: string) => Number(number));
