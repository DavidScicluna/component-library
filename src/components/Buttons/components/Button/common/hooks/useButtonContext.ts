import { useContext } from 'react';

import { ButtonContext } from '../../Button';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from '../constants';
import type { ButtonContext as ButtonContextType, ButtonElement } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';

const useButtonContext = <Element extends ButtonElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_BUTTON_SIZE,
		variant: variantProp = DEFAULT_BUTTON_VARIANT
	} = useContext<ButtonContextType<Element>>(ButtonContext);

	const { size, variant } = useButtonResponsiveValues({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useButtonContext;
