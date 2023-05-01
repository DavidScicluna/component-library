import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import {
	activeTab as defaultActiveTab,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../../common/default/props';
import { DummyTabsContext } from '../..';
import { DummyTabsContext as DummyTabsContextType } from '../types';

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
