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

export const getAnimationDelay = memoize(
	(delay: ThemeDelay = __DEFAULT_DELAY__, amount: number = 1000): AnimationDelay => {
		return convertStringToNumber(theme.transitionDuration[delay], 'ms') / amount;
	}
);

export const getAnimationDuration = memoize(
	(duration: ThemeDuration = __DEFAULT_DURATION__, amount: number = 1000): AnimationDuration => {
		return convertStringToNumber(theme.transitionDuration[duration], 'ms') / amount;
	}
);

export const getAnimationEasings = memoize((easing: ThemeEase = __DEFAULT_EASING__): AnimationEasing => {
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
