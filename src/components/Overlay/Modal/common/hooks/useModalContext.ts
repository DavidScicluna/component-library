import { useContext } from 'react';

import { method as defaultOnClose } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { ModalContext } from '../..';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	size as defaultSize,
	spacing as defaultSpacing
} from '../default/props';
import { ModalContext as ModalContextType } from '../types';

const useModalContext = (): NoUndefinedField<ModalContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		onClose = defaultOnClose,
		size = defaultSize,
		spacing = defaultSpacing
	} = useContext<ModalContextType>(ModalContext);

	return { color, colorMode, onClose, size, spacing };
};

export default useModalContext;
