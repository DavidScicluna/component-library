import memoize from 'micro-memoize';

import { DEFAULT_DELAY, DEFAULT_DURATION, DEFAULT_EASING } from '@common/constants';
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

export const getAnimationDelay = memoize((delay: ThemeDelay = DEFAULT_DELAY, amount: number = 1000): AnimationDelay => {
	return convertStringToNumber(theme.transitionDuration[delay], 'ms') / amount;
});

export const getAnimationDuration = memoize(
	(duration: ThemeDuration = DEFAULT_DURATION, amount: number = 1000): AnimationDuration => {
		return convertStringToNumber(theme.transitionDuration[duration], 'ms') / amount;
	}
);

export const getAnimationEasings = memoize((easing: ThemeEase = DEFAULT_EASING): AnimationEasing => {
	return theme.transitionTimingFunction[easing]
		.replace('cubic-bezier', '')
		.replace('(', '')
		.replace(')', '')
		.replace(' ', '')
		.split(',')
		.map((number) => Number(number));
});

export const getAnimationConfig = memoize((): AnimationConfig => {
	const duration: AnimationDuration = getAnimationDuration();
	const easings: AnimationEasing = getAnimationEasings();

	return { duration, easings };
});
