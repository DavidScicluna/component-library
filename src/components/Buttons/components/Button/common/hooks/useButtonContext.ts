import { useContext } from 'react';

import { ButtonContext } from '../../Button';
import { __DEFAULT_BUTTON_SIZE__, __DEFAULT_BUTTON_VARIANT__ } from '../constants';
import type { ButtonContext as ButtonContextType } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';

const useButtonContext = () => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_BUTTON_VARIANT__
	} = useContext<ButtonContextType>(ButtonContext);

	const { size, variant } = useButtonResponsiveValues({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useButtonContext;
