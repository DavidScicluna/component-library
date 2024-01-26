import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import {
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from '../constants';
import type { DummyButtonElement, DummyButtonProps } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';

type DummyButtonSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseDummyButtonSizeConfigProps<Element extends DummyButtonElement> = Pick<
	DummyButtonProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseDummyButtonSizeConfigReturn = DummyButtonSizeConfig;

const useDummyButtonSizeConfig = <Element extends DummyButtonElement>(
	props: UseDummyButtonSizeConfigProps<Element>
): UseDummyButtonSizeConfigReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = props;

	const { isCompact, isRound, size, variant } = useDummyButtonResponsiveValues<Element>({
		isCompact: isCompactProp,
		isRound: isRoundProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useMemo<DummyButtonSizeConfig>(() => {
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
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: isCompact ? 1.75 : 3.5, y: isCompact ? 1 : 1.75 },
					radius,
					spacing: isCompact ? 1.75 : 3.5
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: isCompact ? 2 : 4, y: isCompact ? 1.25 : 2 },
					radius,
					spacing: isCompact ? 2 : 4
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: isCompact ? 1.5 : 3, y: isCompact ? 0.75 : 1.5 },
					radius,
					spacing: isCompact ? 1.5 : 3
				};
		}
	}, [isCompact, isRound, size, variant]);

	return config;
};

export default useDummyButtonSizeConfig;
