import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '../constants';
import type { ButtonDefaultElement, ButtonElement, ButtonProps, ButtonSize, ButtonVariant } from '../types';

type ButtonSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseButtonSizeConfigProps<Element extends ButtonElement = ButtonDefaultElement> = Pick<
	ButtonProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseButtonSizeConfigReturn = ButtonSizeConfig;

const useButtonSizeConfig = <Element extends ButtonElement = ButtonDefaultElement>(
	props: UseButtonSizeConfigProps<Element>
): UseButtonSizeConfigReturn => {
	const {
		isCompact = __DEFAULT_BUTTON_IS_COMPACT__,
		isRound = __DEFAULT_BUTTON_IS_ROUND__,
		size = __DEFAULT_BUTTON_SIZE__,
		variant = __DEFAULT_BUTTON_VARIANT__
	} = props;

	const config = useMemo<ButtonSizeConfig>(() => {
		const s = getResponsiveValue<ButtonSize>(size);
		const v = getResponsiveValue<ButtonVariant>(variant);

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

export default useButtonSizeConfig;
