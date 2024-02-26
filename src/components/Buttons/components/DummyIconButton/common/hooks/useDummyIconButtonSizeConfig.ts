import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import {
	DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_ICON_BUTTON_SIZE,
	DEFAULT_DUMMY_ICON_BUTTON_VARIANT
} from '../constants';
import type { DummyIconButtonElement, DummyIconButtonProps } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type DummyIconButtonSizeConfig = {
	fontSize: ThemeFontSize;
	padding: ThemeSpacing;
	radius: ThemeRadius;
};

type UseDummyIconButtonSizeConfigProps<Element extends DummyIconButtonElement> = Pick<
	DummyIconButtonProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseDummyIconButtonSizeConfigReturn = DummyIconButtonSizeConfig;

const useDummyIconButtonSizeConfig = <Element extends DummyIconButtonElement>(
	props: UseDummyIconButtonSizeConfigProps<Element>
): UseDummyIconButtonSizeConfigReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
		isRound: isRoundProp = DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
		size: sizeProp = DEFAULT_DUMMY_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_ICON_BUTTON_VARIANT
	} = props;

	const { isCompact, isRound, size, variant } = useDummyIconButtonResponsiveValues<Element>({
		isCompact: isCompactProp,
		isRound: isRoundProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useMemo<DummyIconButtonSizeConfig>(() => {
		const radius: ThemeRadius = variant === 'icon' ? 'none' : isRound ? 'full' : isCompact ? 'xs' : 'base';

		switch (size) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: isCompact ? 0.25 : 1,
					radius
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: isCompact ? 0.5 : 1.25,
					radius
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: isCompact ? 1 : 1.75,
					radius
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: isCompact ? 1.25 : 2,
					radius
				};
			default:
				return {
					fontSize: 'md',
					padding: isCompact ? 0.75 : 1.5,
					radius
				};
		}
	}, [isCompact, isRound, size, variant]);

	return config;
};

export default useDummyIconButtonSizeConfig;
