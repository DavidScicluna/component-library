import memoize from 'micro-memoize';

import { AppColor, NoUndefinedField } from '../../../../../../../../common/types';
import { GetHueType } from '../../../../../../../../common/utils/color';
import { CardContext } from '../../../../common/types';

type GetCardTitleUtilsProps = NoUndefinedField<Pick<CardContext, 'color' | 'colorMode' | 'variant'>>;

export const getCardTitleColor = memoize(({ color, variant }: GetCardTitleUtilsProps): AppColor => {
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

export const getCardTitleColorType = memoize(({ color, colorMode, variant }: GetCardTitleUtilsProps): GetHueType => {
	switch (variant) {
		case 'contained':
			return 'background';
		case 'monochrome':
			return 'text.primary';
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
});
