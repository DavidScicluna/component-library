import { useContext } from 'react';

import { IconButtonContext } from '../../IconButton';
import { DEFAULT_ICON_BUTTON_SIZE, DEFAULT_ICON_BUTTON_VARIANT } from '../constants';
import type { IconButtonContext as IconButtonContextType, IconButtonDefaultElement } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

const useIconButtonContext = () => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT
	} = useContext<IconButtonContextType<IconButtonDefaultElement>>(IconButtonContext);

	const { size, variant } = useIconButtonResponsiveValues({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useIconButtonContext;
