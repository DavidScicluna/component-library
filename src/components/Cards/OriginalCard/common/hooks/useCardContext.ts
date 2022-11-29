import { useContext } from 'react';

import { CardContext } from '../..';
import { CardContext as CardContextType } from '../../types';
import { NoUndefinedField } from '../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight,
	spacing as defaultSpacing
} from '../../../common/data/defaultPropValues';
import { isDisabled as defaultIsDisabled } from '../data/defaultPropValues';

const useCardContext = (): NoUndefinedField<CardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isLight = defaultIsLight,
		spacing = defaultSpacing
	} = useContext<CardContextType>(CardContext);

	return { color, colorMode, isDisabled, isLight, spacing };
};

export default useCardContext;
