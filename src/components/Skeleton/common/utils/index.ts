import { darken, lighten } from 'color2k';
import memoize from 'memoizee';

import { convertStringToNumber } from '../../../../common/utils';
import { Duration, Theme } from '../../../../theme/types';
import { color as defaultColor, colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { SkeletonProps } from '../../types';

type GetSkeletonAnimationColorProps = {
	hex: string;
	type: 'start' | 'end';
} & Pick<SkeletonProps, 'color' | 'colorMode'>;

export const getSkeletonAnimationColor = memoize((props: GetSkeletonAnimationColorProps): string => {
	const { color = defaultColor, colorMode = defaultColorMode, hex, type } = props;

	const opacity = type === 'start' ? 0 : 0.1;

	if (color === 'white' || color === 'black') {
		switch (color) {
			case 'white':
				return darken(hex, opacity);
			case 'black':
				return lighten(hex, opacity);
		}
	} else {
		switch (colorMode) {
			case 'light':
				return darken(hex, opacity);
			case 'dark':
				return lighten(hex, opacity);
		}
	}
});

export type GetSkeletonDurationDelayProps = { theme: Theme; duration?: Duration };

export const getSkeletonDuration = memoize((props: GetSkeletonDurationDelayProps): number => {
	const { theme, duration = 'normal' } = props;

	return convertStringToNumber(theme.transition.duration[duration] || '250ms', 'ms') / 1000;
});

export const getSkeletonDelay = memoize((props: GetSkeletonDurationDelayProps): number => {
	const { theme, duration = 'faster' } = props;

	return convertStringToNumber(theme.transition.duration[duration] || '100ms', 'ms') / 1000;
});
