import memoize from 'micro-memoize';

import { Radius, Space } from '../../../../../theme/types';
import { size as defaultSize } from '../../../FormControl/common/default/props';
import { isCompact as defaultIsCompact, isRound as defaultIsRound, variant as defaultVariant } from '../default/props';
import { CheckboxProps } from '../types';

type GetSizeConfigProps = Pick<CheckboxProps, 'isCompact' | 'size'>;
export type GetSizeConfigReturn = {
	spacing: Space; // In Space (Theme) Values
	padding: Space; // In Space (Theme) Values
};

export const getSizeConfig = memoize(
	({ isCompact = defaultIsCompact, size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
		switch (size) {
			case 'xs':
				return {
					padding: isCompact ? 0.25 : 1,
					spacing: isCompact ? 0.25 : 1
				};
			case 'sm':
				return {
					padding: isCompact ? 0.5 : 1.25,
					spacing: isCompact ? 0.5 : 1.25
				};
			case 'lg':
				return {
					padding: isCompact ? 1 : 1.75,
					spacing: isCompact ? 1 : 1.75
				};
			case 'xl':
				return {
					padding: isCompact ? 1.25 : 2,
					spacing: isCompact ? 1.25 : 2
				};
			default:
				return {
					padding: isCompact ? 0.75 : 1.5,
					spacing: isCompact ? 0.75 : 1.5
				};
		}
	}
);

type GetVariantRadiusProps = Pick<CheckboxProps, 'isCompact' | 'isRound' | 'variant'>;

export const getVariantRadius = memoize((props: GetVariantRadiusProps): Radius => {
	const { isCompact = defaultIsCompact, isRound = defaultIsRound, variant = defaultVariant } = props;

	switch (variant) {
		case 'transparent':
			return 'none';
		default:
			return isRound ? 'full' : isCompact ? 'xs' : 'base';
	}
});
