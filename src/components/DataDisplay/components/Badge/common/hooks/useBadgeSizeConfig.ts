import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_BADGE_IS_COMPACT__,
	__DEFAULT_BADGE_IS_ROUND__,
	__DEFAULT_BADGE_SIZE__,
	__DEFAULT_BADGE_VARIANT__
} from '../constants';
import type { BadgeProps, BadgeSize, BadgeVariant } from '../types';

type BadgeSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseBadgeSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	BadgeProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseBadgeSizeConfigReturn = BadgeSizeConfig;

const useBadgeSizeConfig = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseBadgeSizeConfigProps<Element>
): UseBadgeSizeConfigReturn => {
	const {
		isCompact = __DEFAULT_BADGE_IS_COMPACT__,
		isRound = __DEFAULT_BADGE_IS_ROUND__,
		size = __DEFAULT_BADGE_SIZE__,
		variant = __DEFAULT_BADGE_VARIANT__
	} = props;

	const config = useMemo<BadgeSizeConfig>(() => {
		const s = getResponsiveValue<BadgeSize>(size);
		const v = getResponsiveValue<BadgeVariant>(variant);

		const radius: ThemeRadius = v === 'text' ? 'none' : isRound ? 'full' : isCompact ? 'xs' : 'base';

		switch (s) {
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
					fontSize: s,
					padding: { x: isCompact ? 2 : 4, y: isCompact ? 1.25 : 2 },
					radius,
					spacing: isCompact ? 2 : 4
				};
		}
	}, [isCompact, isRound, size, variant]);

	return config;
};

export default useBadgeSizeConfig;
