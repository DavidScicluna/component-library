import { useContext } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnClose
} from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { ConfirmModalContext } from '../..';
import { spacing as defaultSpacing } from '../default/props';
import { ConfirmModalContext as ConfirmModalContextType } from '../types';

const useConfirmModalContext = (): NoUndefinedField<ConfirmModalContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		onClose = defaultOnClose,
		spacing = defaultSpacing
	} = useContext<ConfirmModalContextType>(ConfirmModalContext);

	return { color, colorMode, onClose, spacing };
};

export default useConfirmModalContext;
