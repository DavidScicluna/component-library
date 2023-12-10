import { useContext } from 'react';

import { DummyBadgeContext } from '../../DummyBadge';
import { __DEFAULT_DUMMY_BADGE_SIZE__, __DEFAULT_DUMMY_BADGE_VARIANT__ } from '../constants';
import type { DummyBadgeContext as DummyBadgeContextType } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';

const useDummyBadgeContext = () => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BADGE_VARIANT__
	} = useContext<DummyBadgeContextType>(DummyBadgeContext);

	const { size, variant } = useDummyBadgeResponsiveValues({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useDummyBadgeContext;
