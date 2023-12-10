import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';

import { DummyTabsContext } from '../../DummyTabs';
import {
	__DEFAULT_DUMMY_TABS_ALIGN__,
	__DEFAULT_DUMMY_TABS_ID__,
	__DEFAULT_DUMMY_TABS_INDEX__,
	__DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	__DEFAULT_DUMMY_TABS_IS_FITTED__,
	__DEFAULT_DUMMY_TABS_ORIENTATION__,
	__DEFAULT_DUMMY_TABS_SIZE__
} from '../constants';
import type { DummyTabsContext as DummyTabsContextType } from '../types';

import useDummyTabsResponsiveValues from './useDummyTabsResponsiveValues';

const useDummyTabsContext = () => {
	const {
		color,
		colorMode,
		align: alignProp = __DEFAULT_DUMMY_TABS_ALIGN__,
		id = __DEFAULT_DUMMY_TABS_ID__,
		index: indexProp = __DEFAULT_DUMMY_TABS_INDEX__,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
		isFitted: isFittedProp = __DEFAULT_DUMMY_TABS_IS_FITTED__,
		orientation: orientationProp = __DEFAULT_DUMMY_TABS_ORIENTATION__,
		size: sizeProp = __DEFAULT_DUMMY_TABS_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__
	} = useContext<DummyTabsContextType>(DummyTabsContext);

	const { align, index, isAnimated, isFitted, orientation, size, spacing } = useDummyTabsResponsiveValues({
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
