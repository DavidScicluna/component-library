import memoize from 'micro-memoize';

import { __DEFAULT_DURATION__, __DEFAULT_EASING__ } from '../constants';
import theme from '../theme';
import { AnimationConfig, AnimationDelay, AnimationDuration, AnimationEasing } from '../types/animation';
import { Duration, Ease } from '../types/theme';

import { convertEasingsToArray, convertStringToNumber } from '.';

export const getAnimationDelay = memoize((delay: Duration = __DEFAULT_DURATION__): AnimationDelay => {
	return convertStringToNumber(theme.transitionDuration[delay], 'ms') / 1000;
});

export const getAnimationDuration = memoize((duration: Duration = __DEFAULT_DURATION__): AnimationDuration => {
	return convertStringToNumber(theme.transitionDuration[duration], 'ms') / 1000;
});

export const getAnimationEasings = memoize((easing: Ease = __DEFAULT_EASING__): AnimationEasing => {
	return convertEasingsToArray({ easing: theme.transitionTimingFunction[easing] });
});

export const getAnimationConfig = memoize((): AnimationConfig => {
	const duration: AnimationDuration = getAnimationDuration();
	const easings: AnimationEasing = getAnimationEasings();

	return { duration, easings };
});
