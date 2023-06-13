import { useContext } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnClose
} from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { ConfirmModalContext } from '../..';
import { isOpen as defaultIsOpen, size as defaultSize, spacing as defaultSpacing } from '../default/props';
import { ConfirmModalContext as ConfirmModalContextType } from '../types';

const useConfirmModalContext = (): NoUndefinedField<ConfirmModalContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isOpen = defaultIsOpen,
		onClose = defaultOnClose,
		size = defaultSize,
		spacing = defaultSpacing
	} = useContext<ConfirmModalContextType>(ConfirmModalContext);

	return { color, colorMode, isOpen, onClose, size, spacing };
};

export default useConfirmModalContext;
