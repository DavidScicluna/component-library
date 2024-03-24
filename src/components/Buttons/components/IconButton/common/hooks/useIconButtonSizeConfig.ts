import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import {
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from '../constants';
import type { IconButtonUniqueProps } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type IconButtonSizeConfig = {
	fontSize: ThemeFontSize;
	padding: ThemeSpacing;
	radius: ThemeRadius;
};

type UseIconButtonSizeConfigProps = Pick<IconButtonUniqueProps, 'isCompact' | 'isRound' | 'size' | 'variant'>;
type UseIconButtonSizeConfigReturn = IconButtonSizeConfig;

const useIconButtonSizeConfig = (props: UseIconButtonSizeConfigProps): UseIconButtonSizeConfigReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_ICON_BUTTON_IS_COMPACT,
		isRound: isRoundProp = DEFAULT_ICON_BUTTON_IS_ROUND,
		size: sizeProp = DEFAULT_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT
	} = props;

	const { isCompact, isRound, size, variant } = useIconButtonResponsiveValues({
		isCompact: isCompactProp,
		isRound: isRoundProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useMemo<IconButtonSizeConfig>(() => {
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

export default useIconButtonSizeConfig;
