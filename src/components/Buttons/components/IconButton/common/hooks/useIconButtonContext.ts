import { useContext } from 'react';

import { IconButtonContext } from '../../IconButton';
import { __DEFAULT_ICON_BUTTON_SIZE__, __DEFAULT_ICON_BUTTON_VARIANT__ } from '../constants';
import type { IconButtonContext as IconButtonContextType } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

const useIconButtonContext = () => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_VARIANT__
	} = useContext<IconButtonContextType>(IconButtonContext);

	const { size, variant } = useIconButtonResponsiveValues({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useIconButtonContext;
