import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import { __DEFAULT_SWITCH_IS_COMPACT__, __DEFAULT_SWITCH_SIZE__ } from '../constants';
import type { SwitchProps } from '../types';

import { useSwitchResponsiveValues } from '.';

type SwitchSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseSwitchSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	SwitchProps<Element>,
	'isCompact' | 'size'
>;
type UseSwitchSizeConfigReturn = SwitchSizeConfig;

const useSwitchSizeConfig = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseSwitchSizeConfigProps<Element>
): UseSwitchSizeConfigReturn => {
	const { isCompact: isCompactProp = __DEFAULT_SWITCH_IS_COMPACT__, size: sizeProp = __DEFAULT_SWITCH_SIZE__ } =
		props;

	const { isCompact, size } = useSwitchResponsiveValues<Element>({ isCompact: isCompactProp, size: sizeProp });

	const config = useMemo<SwitchSizeConfig>(() => {
		const radius: ThemeRadius = 'full';

		switch (size) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: isCompact ? 0.25 : 1, y: isCompact ? 0.25 : 1 },
					radius,
					spacing: isCompact ? 0.25 : 1
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: isCompact ? 0.5 : 1.25, y: isCompact ? 0.5 : 1.25 },
					radius,
					spacing: isCompact ? 0.5 : 1.25
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: isCompact ? 1 : 1.75, y: isCompact ? 1 : 1.75 },
					radius,
					spacing: isCompact ? 1 : 1.75
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: isCompact ? 1.25 : 2, y: isCompact ? 1.25 : 2 },
					radius,
					spacing: isCompact ? 1.25 : 2
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: isCompact ? 0.75 : 1.5, y: isCompact ? 0.75 : 1.5 },
					radius,
					spacing: isCompact ? 0.75 : 1.5
				};
		}
	}, [isCompact, size]);

	return config;
};

export default useSwitchSizeConfig;