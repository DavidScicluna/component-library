import { useContext } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnClose
} from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { ModalContext } from '../..';
import { isOpen as defaultIsOpen, size as defaultSize, spacing as defaultSpacing } from '../default/props';
import { ModalContext as ModalContextType } from '../types';

const useModalContext = (): NoUndefinedField<ModalContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isOpen = defaultIsOpen,
		onClose = defaultOnClose,
		size = defaultSize,
		spacing = defaultSpacing
	} = useContext<ModalContextType>(ModalContext);

	return { color, colorMode, isOpen, onClose, size, spacing };
};

export default useModalContext;
