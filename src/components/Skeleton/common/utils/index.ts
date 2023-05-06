import { darken, lighten } from 'color2k';
import memoize from 'micro-memoize';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { Undefinable } from '../../../../common/types';
import { SkeletonProps } from '../types';

type GetSkeletonAnimationColorProps = {
	hex: string;
	type: 'start' | 'end';
} & Pick<SkeletonProps, 'color' | 'colorMode'>;

export const getSkeletonAnimationColor = memoize((props: GetSkeletonAnimationColorProps): Undefinable<string> => {
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
