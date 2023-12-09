import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import {
	__DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
} from '../constants';
import type { DummyIconButtonProps } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type DummyIconButtonSizeConfig = {
	fontSize: ThemeFontSize;
	padding: ThemeSpacing;
	radius: ThemeRadius;
};

type UseDummyIconButtonSizeConfigProps = Pick<DummyIconButtonProps, 'isCompact' | 'isRound' | 'size' | 'variant'>;
type UseDummyIconButtonSizeConfigReturn = DummyIconButtonSizeConfig;

const useDummyIconButtonSizeConfig = (props: UseDummyIconButtonSizeConfigProps): UseDummyIconButtonSizeConfigReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
		isRound: isRoundProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
		size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
	} = props;

	const { isCompact, isRound, size, variant } = useDummyIconButtonResponsiveValues({
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
