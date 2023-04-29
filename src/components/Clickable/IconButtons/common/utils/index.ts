import memoize from 'micro-memoize';

import { NoUndefinedField } from '../../../../../common/types';
import { Radius, Space } from '../../../../../theme/types';
import {
	isCompact as defaultIsCompact,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../default/props';
import { CommonIconButtonProps } from '../types';

export type GetSizeConfigReturn = {
	padding: Space;
};
type GetSizeConfigProps = Pick<CommonIconButtonProps, 'isCompact' | 'size'>;

export const getSizeConfig = memoize((props: NoUndefinedField<GetSizeConfigProps>): GetSizeConfigReturn => {
	const { isCompact = defaultIsCompact, size = defaultSize } = props;

	switch (size) {
		case 'xs':
			return {
				// width: isCompact ? 22 : 30,
				// height: isCompact ? 22 : 30,
				padding: isCompact ? 0.25 : 1
			};
		case 'sm':
			return {
				// width: isCompact ? 26 : 36,
				// height: isCompact ? 26 : 36,
				padding: isCompact ? 0.5 : 1.25
			};
		case 'lg':
			return {
				// width: isCompact ? 34 : 50,
				// height: isCompact ? 34 : 50,
				padding: isCompact ? 1 : 1.75
			};
		case 'xl':
			return {
				// width: isCompact ? 40 : 60,
				// height: isCompact ? 40 : 60,
				padding: isCompact ? 1.25 : 2
			};
		default:
			return {
				// width: isCompact ? 30 : 42,
				// height: isCompact ? 30 : 42,
				padding: isCompact ? 0.75 : 1.5
			};
	}
});

type GetVariantRadiusProps = Pick<CommonIconButtonProps, 'isCompact' | 'isRound' | 'variant'>;

export const getVariantRadius = memoize((props: GetVariantRadiusProps): Radius => {
	const { isCompact = defaultIsCompact, isRound = defaultIsRound, variant = defaultVariant } = props;

	switch (variant) {
		case 'icon':
			return 'none';
		default:
			return isRound ? 'full' : isCompact ? 'xs' : 'base';
	}
});
