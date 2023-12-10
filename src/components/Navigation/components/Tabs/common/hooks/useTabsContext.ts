import { useContext } from 'react';

import { __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';

import { TabsContext } from '../../Tabs';
import {
	__DEFAULT_TABS_ALIGN__,
	__DEFAULT_TABS_ID__,
	__DEFAULT_TABS_INDEX__,
	__DEFAULT_TABS_IS_DISABLED__,
	__DEFAULT_TABS_IS_FITTED__,
	__DEFAULT_TABS_ORIENTATION__,
	__DEFAULT_TABS_SIZE__
} from '../constants';
import type { TabsContext as TabsContextType } from '../types';

import useTabsResponsiveValues from './useTabsResponsiveValues';

const useTabsContext = () => {
	const {
		color,
		colorMode,
		align: alignProp = __DEFAULT_TABS_ALIGN__,
		id = __DEFAULT_TABS_ID__,
		index: indexProp = __DEFAULT_TABS_INDEX__,
		isDisabled: isDisabledProp = __DEFAULT_TABS_IS_DISABLED__,
		isFitted: isFittedProp = __DEFAULT_TABS_IS_FITTED__,
		onChange = __DEFAULT_METHOD__,
		orientation: orientationProp = __DEFAULT_TABS_ORIENTATION__,
		size: sizeProp = __DEFAULT_TABS_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__
	} = useContext<TabsContextType>(TabsContext);

	const { align, index, isDisabled, isFitted, orientation, size, spacing } = useTabsResponsiveValues({
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
