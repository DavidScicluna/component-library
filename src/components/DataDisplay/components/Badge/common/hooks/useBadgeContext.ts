import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { BadgeContext } from '../../Badge';
import { __DEFAULT_BADGE_SIZE__, __DEFAULT_BADGE_VARIANT__ } from '../constants';
import type { BadgeContext as BadgeContextType, BadgeSize, BadgeVariant } from '../types';

const useBadgeContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		size: s = __DEFAULT_BADGE_SIZE__,
		variant: v = __DEFAULT_BADGE_VARIANT__
	} = useContext<BadgeContextType<Element>>(BadgeContext);

	const size = useGetResponsiveValue<BadgeSize>(s);
	const variant = useGetResponsiveValue<BadgeVariant>(v);

	return { color, colorMode, size, variant };
};

export default useBadgeContext;
