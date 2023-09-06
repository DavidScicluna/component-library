import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from '../constants';
import type {
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonSize,
	IconButtonVariant
} from '../types';

type IconButtonSizeConfig = {
	fontSize: ThemeFontSize;
	padding: ThemeSpacing;
	radius: ThemeRadius;
};

type UseIconButtonSizeConfigProps<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseIconButtonSizeConfigReturn = IconButtonSizeConfig;

const useIconButtonSizeConfig = <Element extends IconButtonElement = IconButtonDefaultElement>(
	props: UseIconButtonSizeConfigProps<Element>
): UseIconButtonSizeConfigReturn => {
	const {
		isCompact = __DEFAULT_ICON_BUTTON_IS_COMPACT__,
		isRound = __DEFAULT_ICON_BUTTON_IS_ROUND__,
		size = __DEFAULT_ICON_BUTTON_SIZE__,
		variant = __DEFAULT_ICON_BUTTON_VARIANT__
	} = props;

	const config = useMemo<IconButtonSizeConfig>(() => {
		const s = getResponsiveValue<IconButtonSize>(size);
		const v = getResponsiveValue<IconButtonVariant>(variant);

		const radius: ThemeRadius = v === 'icon' ? 'none' : isRound ? 'full' : isCompact ? 'xs' : 'base';

		switch (s) {
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
