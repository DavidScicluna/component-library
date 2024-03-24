import { useContext } from 'react';

import { ButtonContext } from '../../Button';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from '../constants';
import type { ButtonContext as ButtonContextType, ButtonDefaultElement } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';

const useButtonContext = () => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_BUTTON_SIZE,
		variant: variantProp = DEFAULT_BUTTON_VARIANT
	} = useContext<ButtonContextType<ButtonDefaultElement>>(ButtonContext);

	const { size, variant } = useButtonResponsiveValues({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useButtonContext;
