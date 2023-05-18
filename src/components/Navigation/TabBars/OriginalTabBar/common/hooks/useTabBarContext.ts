import { useContext } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnChange
} from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import {
	activeTab as defaultActiveTab,
	isDisabled as defaultIsDisabled,
	size as defaultSize
} from '../../../common/default/props';
import { TabBarContext } from '../..';
import { TabBarContext as TabBarContextType } from '../types';

const useTabBarContext = (): NoUndefinedField<TabBarContextType> => {
	const {
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		onChange = defaultOnChange,
		size = defaultSize
	} = useContext<TabBarContextType>(TabBarContext);

	return { activeTab, color, colorMode, isDisabled, onChange, size };
};

export default useTabBarContext;
