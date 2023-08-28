import memoize from 'micro-memoize';

import { __DEFAULT_DELAY__, __DEFAULT_DURATION__, __DEFAULT_EASING__ } from '@common/constants';
import theme from '@common/theme';
import type {
	AnimationConfig,
	AnimationDelay,
	AnimationDuration,
	AnimationEasing,
	ThemeDelay,
	ThemeDuration,
	ThemeEase
} from '@common/types';

import { convertStringToNumber } from '.';

export const getAnimationDelay = memoize((delay: ThemeDelay = __DEFAULT_DELAY__): AnimationDelay => {
	return convertStringToNumber(theme.transitionDuration[delay], 'ms') / 1000;
});

export const getAnimationDuration = memoize((duration: ThemeDuration = __DEFAULT_DURATION__): AnimationDuration => {
	return convertStringToNumber(theme.transitionDuration[duration], 'ms') / 1000;
});

export const getAnimationEasings = memoize((easing: ThemeEase = __DEFAULT_EASING__): AnimationEasing => {
	return theme.transitionTimingFunction[easing]
		.replaceAll('cubic-bezier', '')
		.replaceAll('(', '')
		.replaceAll(')', '')
		.replaceAll(' ', '')
		.split(',')
		.map((number) => Number(number));
});

export const getAnimationConfig = memoize((): AnimationConfig => {
	const duration: AnimationDuration = getAnimationDuration();
	const easings: AnimationEasing = getAnimationEasings();

	return { duration, easings };
});
