import { useContext } from 'react';

import { TabBarContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import { TabBarContext as TabBarContextType } from '../../types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	direction as defaultDirection
} from '../data/defaultPropValues';

const useTabBarContext = (): NoUndefinedField<TabBarContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		direction = defaultDirection
	} = useContext<TabBarContextType>(TabBarContext);

	return { color, colorMode, direction };
};

export default useTabBarContext;
