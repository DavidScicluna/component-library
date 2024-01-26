import { useContext } from 'react';

import { IconButtonContext } from '../../IconButton';
import { __DEFAULT_ICON_BUTTON_SIZE__, __DEFAULT_ICON_BUTTON_VARIANT__ } from '../constants';
import type { IconButtonContext as IconButtonContextType, IconButtonElement } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

const useIconButtonContext = <Element extends IconButtonElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_VARIANT__
	} = useContext<IconButtonContextType<Element>>(IconButtonContext);

	const { size, variant } = useIconButtonResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useIconButtonContext;
