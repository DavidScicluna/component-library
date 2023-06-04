import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import {
	isDivisible as defaultIsDivisible,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../common/default/props';
import { CardContext } from '../..';
import { CardContext as CardContextType } from '../types';

const useCardContext = (): NoUndefinedField<CardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDivisible = defaultIsDivisible,
		spacing = defaultSpacing,
		variant = defaultVariant
	} = useContext<CardContextType>(CardContext);

	return { color, colorMode, isDivisible, spacing, variant };
};

export default useCardContext;
