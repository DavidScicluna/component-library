import memoize from 'micro-memoize';

import { AppColor, NoUndefinedField } from '../../../../../../../../common/types';
import { GetHueType } from '../../../../../../../../common/utils/color';
import { CardContext } from '../../../../common/types';

type GetCardSubtitleUtilsProps = NoUndefinedField<Pick<CardContext, 'color' | 'colorMode' | 'variant'>>;

export const getCardSubtitleColor = memoize(({ color, variant }: GetCardSubtitleUtilsProps): AppColor => {
	switch (variant) {
		case 'contained':
		case 'monochrome':
			return 'gray';
		case 'light':
		case 'outlined':
		case 'transparent':
			return color === 'black' || color === 'white' ? 'gray' : color;
	}
});

export const getCardSubtitleColorType = memoize(
	({ color, colorMode, variant }: GetCardSubtitleUtilsProps): GetHueType => {
		switch (variant) {
			case 'contained':
				return 'background';
			case 'monochrome':
				return 'text.secondary';
			case 'light':
				return colorMode === 'light'
					? color === 'black'
						? 'dark'
						: color === 'white'
						? 'light'
						: 'lightest'
					: color === 'black'
					? 'light'
					: color === 'white'
					? 'dark'
					: 'darkest';
			case 'outlined':
			case 'transparent':
				return 'color';
		}
	}
);
