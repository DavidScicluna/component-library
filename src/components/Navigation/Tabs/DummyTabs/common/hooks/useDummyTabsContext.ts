import { useContext } from 'react';

import { DummyTabsContext } from '../..';
import { NoUndefinedField } from '../../../../../../common/types';
import {
	activeTab as defaultActiveTab,
	color as defaultColor,
	colorMode as defaultColorMode,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../../common/default/props';
import { DummyTabsContext as DummyTabsContextType } from '../../types';

const useDummyTabsContext = (): NoUndefinedField<DummyTabsContextType> => {
	const {
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFitted = defaultIsFitted,
		size = defaultSize
	} = useContext<DummyTabsContextType>(DummyTabsContext);

	return { activeTab, color, colorMode, isFitted, size };
};

export default useDummyTabsContext;
