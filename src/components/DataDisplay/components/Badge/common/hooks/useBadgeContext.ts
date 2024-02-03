import { useContext } from 'react';

import { BadgeContext } from '../../Badge';
import { __DEFAULT_BADGE_SIZE__, __DEFAULT_BADGE_VARIANT__ } from '../constants';
import type { BadgeContext as BadgeContextType, BadgeElement } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';

const useBadgeContext = <Element extends BadgeElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_BADGE_VARIANT__
	} = useContext<BadgeContextType<Element>>(BadgeContext);

	const { size, variant } = useBadgeResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useBadgeContext;
