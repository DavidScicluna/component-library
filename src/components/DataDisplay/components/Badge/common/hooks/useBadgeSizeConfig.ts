import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import {
	DEFAULT_BADGE_IS_COMPACT,
	DEFAULT_BADGE_IS_ROUND,
	DEFAULT_BADGE_SIZE,
	DEFAULT_BADGE_VARIANT
} from '../constants';
import type { BadgeUniqueProps } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';

type BadgeSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseBadgeSizeConfigProps = Pick<BadgeUniqueProps, 'isCompact' | 'isRound' | 'size' | 'variant'>;
type UseBadgeSizeConfigReturn = BadgeSizeConfig;

const useBadgeSizeConfig = (props: UseBadgeSizeConfigProps): UseBadgeSizeConfigReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_BADGE_IS_COMPACT,
		isRound: isRoundProp = DEFAULT_BADGE_IS_ROUND,
		size: sizeProp = DEFAULT_BADGE_SIZE,
		variant: variantProp = DEFAULT_BADGE_VARIANT
	} = props;

	const {
		isCompact = DEFAULT_BADGE_IS_COMPACT,
		isRound = DEFAULT_BADGE_IS_ROUND,
		size = DEFAULT_BADGE_SIZE,
		variant = DEFAULT_BADGE_VARIANT
	} = useBadgeResponsiveValues({
		isCompact: isCompactProp,
		isRound: isRoundProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useMemo<BadgeSizeConfig>(() => {
		const radius: ThemeRadius = variant === 'text' ? 'none' : isRound ? 'full' : isCompact ? 'xs' : 'base';

		switch (size) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: isCompact ? 1 : 2, y: isCompact ? 0.25 : 1 },
					radius,
					spacing: isCompact ? 1 : 2
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: isCompact ? 1.25 : 2.5, y: isCompact ? 0.5 : 1.25 },
					radius,
					spacing: isCompact ? 1.25 : 2.5
				};
			case 'md':
				return {
					fontSize: 'md',
					padding: { x: isCompact ? 1.5 : 3, y: isCompact ? 0.75 : 1.5 },
					radius,
					spacing: isCompact ? 1.5 : 3
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: isCompact ? 1.75 : 3.5, y: isCompact ? 1 : 1.75 },
					radius,
					spacing: isCompact ? 1.75 : 3.5
				};
			default:
				return {
					fontSize: size,
					padding: { x: isCompact ? 2 : 4, y: isCompact ? 1.25 : 2 },
					radius,
					spacing: isCompact ? 2 : 4
				};
		}
	}, [isCompact, isRound, size, variant]);

	return config;
};

export default useBadgeSizeConfig;
