import { useContext } from 'react';

import { SideNavigationContext } from '../..';
import { SideNavigationContext as SideNavigationContextType } from '../../types';
import { NoUndefinedField } from '../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDrawer as defaultIsDrawer,
	mode as defaultMode
} from '../data/defaultPropValues';

const useSideNavigationContext = (): NoUndefinedField<SideNavigationContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDrawer = defaultIsDrawer,
		mode = defaultMode
	} = useContext<SideNavigationContextType>(SideNavigationContext);

	return { color, colorMode, isDrawer, mode };
};

export default useSideNavigationContext;
