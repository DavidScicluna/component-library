import memoize from 'micro-memoize';

import { AppColor, NoUndefinedField } from '../../../../../../../../common/types';
import { GetHueType } from '../../../../../../../../common/utils/color';
import { CollapsibleCardContext } from '../../../../common/types';

type GetCollapsibleCardDividerUtilsProps = NoUndefinedField<Pick<CollapsibleCardContext, 'color' | 'variant'>>;

export const getCollapsibleCardDividerColor = memoize(
	({ color, variant }: GetCollapsibleCardDividerUtilsProps): AppColor => {
		switch (variant) {
			case 'contained':
			case 'monochrome':
				return 'gray';
			case 'light':
			case 'outlined':
			case 'transparent':
				return color === 'black' || color === 'white' ? 'gray' : color;
		}
	}
);

export const getCollapsibleCardDividerColorType = memoize(
	({ color, variant }: GetCollapsibleCardDividerUtilsProps): GetHueType => {
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
	}
);
