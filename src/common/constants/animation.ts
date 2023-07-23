import theme from '@common/theme';
import type { AnimationDelay, AnimationDuration, AnimationEasing } from '@common/types/animation';
import { convertEasingsToArray, convertStringToNumber } from '@common/utils';

import { __DEFAULT_DURATION__, __DEFAULT_EASING__ } from './props';
// import { getAnimationDelay, getAnimationDuration, getAnimationEasings } from '../utils/animation';

export const __DEFAULT_ANIMATION_DELAY__: AnimationDelay =
	convertStringToNumber(theme.transitionDuration[__DEFAULT_DURATION__], 'ms') / 1000;
export const __DEFAULT_ANIMATION_DURATION__: AnimationDuration =
	convertStringToNumber(theme.transitionDuration[__DEFAULT_DURATION__], 'ms') / 1000;
export const __DEFAULT_ANIMATION_EASING__: AnimationEasing = convertEasingsToArray({
	easing: theme.transitionTimingFunction[__DEFAULT_EASING__]
});
