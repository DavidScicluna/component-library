import memoize from 'micro-memoize';

import { NoUndefinedField } from '../../../../../common/types';
import { FontSize, Radius, Space } from '../../../../../theme/types';
import {
	isCompact as defaultIsCompact,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../default/props';
import { BadgeProps } from '../types';

type Padding = Record<'x' | 'y', Space>; // In Space (Theme) Values
export type GetSizeConfigReturn = {
	padding: Padding;
	fontSize: FontSize; // In FontSize (Theme) Values
	spacing: Space; // In Space (Theme) Values
};
type GetSizeConfigProps = Pick<BadgeProps, 'isCompact' | 'size'>;

export const getSizeConfig = memoize((props: NoUndefinedField<GetSizeConfigProps>): GetSizeConfigReturn => {
	const { isCompact = defaultIsCompact, size = defaultSize } = props;

	switch (size) {
		case 'xs':
			return {
				// height: isCompact ? 22 : 30,
				padding: { x: isCompact ? 1 : 2, y: isCompact ? 0.25 : 1 },
				fontSize: 'xs',
				spacing: isCompact ? 1 : 2
			};
		case 'sm':
			return {
				// height: isCompact ? 26 : 36,
				padding: { x: isCompact ? 1.25 : 2.5, y: isCompact ? 0.5 : 1.25 },
				fontSize: 'sm',
				spacing: isCompact ? 1.25 : 2.5
			};
		case 'md':
			return {
				// height: isCompact ? 30 : 42,
				padding: { x: isCompact ? 1.5 : 3, y: isCompact ? 0.75 : 1.5 },
				fontSize: 'md',
				spacing: isCompact ? 1.5 : 3
			};
		case 'lg':
			return {
				// height: isCompact ? 34 : 50,
				padding: { x: isCompact ? 1.75 : 3.5, y: isCompact ? 1 : 1.75 },
				fontSize: 'lg',
				spacing: isCompact ? 1.75 : 3.5
			};
		default:
			return {
				// height: isCompact ? 40 : 60,
				padding: { x: isCompact ? 2 : 4, y: isCompact ? 1.25 : 2 },
				fontSize: 'xl',
				spacing: isCompact ? 2 : 4
			};
	}
});

type GetVariantRadiusProps = Pick<BadgeProps, 'isCompact' | 'isRound' | 'variant'>;

export const getVariantRadius = memoize((props: GetVariantRadiusProps): Radius => {
	const { isCompact = defaultIsCompact, isRound = defaultIsRound, variant = defaultVariant } = props;

	switch (variant) {
		case 'text':
			return 'none';
		default:
			return isRound ? 'full' : isCompact ? 'xs' : 'base';
	}
});
