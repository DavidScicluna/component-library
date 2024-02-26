import { useContext } from 'react';

import { DEFAULT_SPACING } from '@common/constants';

import { DummyTabsContext } from '../../DummyTabs';
import {
	DEFAULT_DUMMY_TABS_ALIGN,
	DEFAULT_DUMMY_TABS_ID,
	DEFAULT_DUMMY_TABS_INDEX,
	DEFAULT_DUMMY_TABS_IS_ANIMATED,
	DEFAULT_DUMMY_TABS_IS_FITTED,
	DEFAULT_DUMMY_TABS_ORIENTATION,
	DEFAULT_DUMMY_TABS_SIZE
} from '../constants';
import type { DummyTabsContext as DummyTabsContextType, DummyTabsElement } from '../types';

import useDummyTabsResponsiveValues from './useDummyTabsResponsiveValues';

const useDummyTabsContext = <Element extends DummyTabsElement>() => {
	const {
		color,
		colorMode,
		align: alignProp = DEFAULT_DUMMY_TABS_ALIGN,
		id = DEFAULT_DUMMY_TABS_ID,
		index: indexProp = DEFAULT_DUMMY_TABS_INDEX,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_TABS_IS_ANIMATED,
		isFitted: isFittedProp = DEFAULT_DUMMY_TABS_IS_FITTED,
		orientation: orientationProp = DEFAULT_DUMMY_TABS_ORIENTATION,
		size: sizeProp = DEFAULT_DUMMY_TABS_SIZE,
		spacing: spacingProp = DEFAULT_SPACING
	} = useContext<DummyTabsContextType<Element>>(DummyTabsContext);

	const { align, index, isAnimated, isFitted, orientation, size, spacing } = useDummyTabsResponsiveValues<Element>({
		align: alignProp,
		index: indexProp,
		isAnimated: isAnimatedProp,
		isFitted: isFittedProp,
		orientation: orientationProp,
		size: sizeProp,
		spacing: spacingProp
	});

	return { color, colorMode, align, id, index, isAnimated, isFitted, orientation, size, spacing };
};

export default useDummyTabsContext;
