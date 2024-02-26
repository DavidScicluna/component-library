import { useContext } from 'react';

import { DEFAULT_METHOD, DEFAULT_SPACING } from '@common/constants';

import { TabsContext } from '../../Tabs';
import {
	DEFAULT_TABS_ALIGN,
	DEFAULT_TABS_ID,
	DEFAULT_TABS_INDEX,
	DEFAULT_TABS_IS_DISABLED,
	DEFAULT_TABS_IS_FITTED,
	DEFAULT_TABS_ORIENTATION,
	DEFAULT_TABS_SIZE
} from '../constants';
import type { TabsContext as TabsContextType, TabsElement } from '../types';

import useTabsResponsiveValues from './useTabsResponsiveValues';

const useTabsContext = <Element extends TabsElement>() => {
	const {
		color,
		colorMode,
		align: alignProp = DEFAULT_TABS_ALIGN,
		id = DEFAULT_TABS_ID,
		index: indexProp = DEFAULT_TABS_INDEX,
		isDisabled: isDisabledProp = DEFAULT_TABS_IS_DISABLED,
		isFitted: isFittedProp = DEFAULT_TABS_IS_FITTED,
		onChange = DEFAULT_METHOD,
		orientation: orientationProp = DEFAULT_TABS_ORIENTATION,
		size: sizeProp = DEFAULT_TABS_SIZE,
		spacing: spacingProp = DEFAULT_SPACING
	} = useContext<TabsContextType<Element>>(TabsContext);

	const { align, index, isDisabled, isFitted, orientation, size, spacing } = useTabsResponsiveValues<Element>({
		align: alignProp,
		index: indexProp,
		isDisabled: isDisabledProp,
		isFitted: isFittedProp,
		orientation: orientationProp,
		size: sizeProp,
		spacing: spacingProp
	});

	return { color, colorMode, align, id, index, isDisabled, isFitted, onChange, orientation, size, spacing };
};

export default useTabsContext;
