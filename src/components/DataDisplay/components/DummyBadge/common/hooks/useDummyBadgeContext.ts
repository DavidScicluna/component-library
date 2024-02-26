import { useContext } from 'react';

import { DummyBadgeContext } from '../../DummyBadge';
import { DEFAULT_DUMMY_BADGE_SIZE, DEFAULT_DUMMY_BADGE_VARIANT } from '../constants';
import type { DummyBadgeContext as DummyBadgeContextType, DummyBadgeElement } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';

const useDummyBadgeContext = <Element extends DummyBadgeElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_DUMMY_BADGE_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BADGE_VARIANT
	} = useContext<DummyBadgeContextType<Element>>(DummyBadgeContext);

	const { size, variant } = useDummyBadgeResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useDummyBadgeContext;
