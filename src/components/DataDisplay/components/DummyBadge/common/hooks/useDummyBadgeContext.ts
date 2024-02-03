import { useContext } from 'react';

import { DummyBadgeContext } from '../../DummyBadge';
import { __DEFAULT_DUMMY_BADGE_SIZE__, __DEFAULT_DUMMY_BADGE_VARIANT__ } from '../constants';
import type { DummyBadgeContext as DummyBadgeContextType, DummyBadgeElement } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';

const useDummyBadgeContext = <Element extends DummyBadgeElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BADGE_VARIANT__
	} = useContext<DummyBadgeContextType<Element>>(DummyBadgeContext);

	const { size, variant } = useDummyBadgeResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useDummyBadgeContext;
