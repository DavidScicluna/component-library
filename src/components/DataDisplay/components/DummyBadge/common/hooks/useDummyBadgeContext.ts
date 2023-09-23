import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { DummyBadgeContext } from '../../DummyBadge';
import { __DEFAULT_DUMMY_BADGE_SIZE__, __DEFAULT_DUMMY_BADGE_VARIANT__ } from '../constants';
import type { DummyBadgeContext as DummyBadgeContextType, DummyBadgeSize, DummyBadgeVariant } from '../types';

const useDummyBadgeContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		size: s = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant: v = __DEFAULT_DUMMY_BADGE_VARIANT__
	} = useContext<DummyBadgeContextType<Element>>(DummyBadgeContext);

	const size = useGetResponsiveValue<DummyBadgeSize>(s);
	const variant = useGetResponsiveValue<DummyBadgeVariant>(v);

	return { color, colorMode, size, variant };
};

export default useDummyBadgeContext;
