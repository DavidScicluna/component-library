import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import { activeTab as defaultActiveTab, size as defaultSize } from '../../../common/default/props';
import { DummyTabBarContext } from '../..';
import { DummyTabBarContext as DummyTabBarContextType } from '../types';

const useDummyTabBarContext = (): NoUndefinedField<DummyTabBarContextType> => {
	const {
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<DummyTabBarContextType>(DummyTabBarContext);

	return {
		activeTab,
		color,
		colorMode,
		size
	};
};

export default useDummyTabBarContext;
