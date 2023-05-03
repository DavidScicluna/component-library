import { useContext } from 'react';

import { NoUndefinedField } from '../../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../common/default/props';
import { CardContext } from '../..';
import { CardContext as CardContextType } from '../types';

const useCardContext = (): NoUndefinedField<CardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		spacing = defaultSpacing,
		variant = defaultVariant
	} = useContext<CardContextType>(CardContext);

	return { color, colorMode, spacing, variant };
};

export default useCardContext;