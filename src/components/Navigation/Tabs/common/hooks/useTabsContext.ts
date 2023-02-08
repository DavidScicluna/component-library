import { useContext } from 'react';

import { TabsContext } from '../..';
import { method as defaultOnChange } from '../../../../../common/data/defaultPropValues';
import { NoUndefinedField } from '../../../../../common/types';
import { TabsContext as TabsContextType } from '../../types';
import {
	activeTab as defaultActiveTab,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../data/defaultPropValues';

const useTabsContext = (): NoUndefinedField<TabsContextType> => {
	const {
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isFitted = defaultIsFitted,
		onChange = defaultOnChange,
		size = defaultSize
	} = useContext<TabsContextType>(TabsContext);

	return { activeTab, color, colorMode, isDisabled, isFitted, onChange, size };
};

export default useTabsContext;
