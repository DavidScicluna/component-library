import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_DUMMY_BADGE_IS_COMPACT__,
	__DEFAULT_DUMMY_BADGE_IS_ROUND__,
	__DEFAULT_DUMMY_BADGE_SIZE__,
	__DEFAULT_DUMMY_BADGE_VARIANT__
} from '../constants';
import type { DummyBadgeProps, DummyBadgeSize, DummyBadgeVariant } from '../types';

type DummyBadgeSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseDummyBadgeSizeConfigProps<Element extends ElementType> = Pick<
	DummyBadgeProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseDummyBadgeSizeConfigReturn = DummyBadgeSizeConfig;

const useDummyBadgeSizeConfig = <Element extends ElementType>(
	props: UseDummyBadgeSizeConfigProps<Element>
): UseDummyBadgeSizeConfigReturn => {
	const {
		isCompact = __DEFAULT_DUMMY_BADGE_IS_COMPACT__,
		isRound = __DEFAULT_DUMMY_BADGE_IS_ROUND__,
		size = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant = __DEFAULT_DUMMY_BADGE_VARIANT__
	} = props;

	const config = useMemo<DummyBadgeSizeConfig>(() => {
		const s = getResponsiveValue<DummyBadgeSize>(size);
		const v = getResponsiveValue<DummyBadgeVariant>(variant);

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

export default useDummyBadgeSizeConfig;
