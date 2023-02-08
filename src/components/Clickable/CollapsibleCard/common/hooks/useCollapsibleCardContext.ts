import { useContext } from 'react';

import { CollapsibleCardContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import { CollapsibleCardContext as CollapsibleCardContextType } from '../../types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen,
	spacing as defaultSpacing
} from '../data/defaultPropValues';

const useCollapsibleCardContext = (): NoUndefinedField<CollapsibleCardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		isLight = defaultIsLight,
		isOpen = defaultIsOpen,
		spacing = defaultSpacing
	} = useContext<CollapsibleCardContextType>(CollapsibleCardContext);

	return { color, colorMode, isDisabled, isFullWidth, isLight, isOpen, spacing };
};

export default useCollapsibleCardContext;
