import { useContext } from 'react';

import { IconButtonContext } from '../../IconButton';
import { DEFAULT_ICON_BUTTON_SIZE, DEFAULT_ICON_BUTTON_VARIANT } from '../constants';
import type { IconButtonContext as IconButtonContextType, IconButtonElement } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

const useIconButtonContext = <Element extends IconButtonElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT
	} = useContext<IconButtonContextType<Element>>(IconButtonContext);

	const { size, variant } = useIconButtonResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useIconButtonContext;
