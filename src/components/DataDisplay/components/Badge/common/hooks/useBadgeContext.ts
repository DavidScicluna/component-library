import { useContext } from 'react';

import { BadgeContext } from '../../Badge';
import { DEFAULT_BADGE_SIZE, DEFAULT_BADGE_VARIANT } from '../constants';
import type { BadgeContext as BadgeContextType, BadgeDefaultElement } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';

const useBadgeContext = () => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_BADGE_SIZE,
		variant: variantProp = DEFAULT_BADGE_VARIANT
	} = useContext<BadgeContextType<BadgeDefaultElement>>(BadgeContext);

	const { size, variant } = useBadgeResponsiveValues({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useBadgeContext;
