import memoize from 'micro-memoize';

import { AppColor, NoUndefinedField } from '../../../../../../../../common/types';
import { GetHueType } from '../../../../../../../../common/utils/color';
import { CardContext } from '../../../../common/types';

type GetCardDividerUtilsProps = NoUndefinedField<Pick<CardContext, 'color' | 'variant'>>;

export const getCardDividerColor = memoize(({ color, variant }: GetCardDividerUtilsProps): AppColor => {
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

export const getCardDividerColorType = memoize(({ color, variant }: GetCardDividerUtilsProps): GetHueType => {
	switch (variant) {
		case 'contained':
		case 'light':
			return color === 'black' ? 'lightest' : color === 'white' ? 'darkest' : 'background';
		case 'monochrome':
			return 'divider';
		case 'outlined':
		case 'transparent':
			return 'color';
	}
});
