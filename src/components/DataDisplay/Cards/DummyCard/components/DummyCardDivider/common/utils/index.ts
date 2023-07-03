import memoize from 'micro-memoize';

import { AppColor, NoUndefinedField } from '../../../../../../../../common/types';
import { GetHueType } from '../../../../../../../../common/utils/color';
import { DummyCardContext } from '../../../../common/types';

type GetDummyCardDividerUtilsProps = NoUndefinedField<Pick<DummyCardContext, 'color' | 'variant'>>;

export const getDummyCardDividerColor = memoize(({ color, variant }: GetDummyCardDividerUtilsProps): AppColor => {
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

export const getDummyCardDividerColorType = memoize(({ color, variant }: GetDummyCardDividerUtilsProps): GetHueType => {
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
