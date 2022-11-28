import { useContext } from 'react';

import { method as defaultOnClose } from '../../../../../common/data/defaultPropValues';
import { ConfirmModalContext } from '../..';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';
import { color as defaultColor, colorMode as defaultColorMode } from '../data/defaultPropValues';
import { NoUndefinedField } from '../../../../../common/types';

const useConfirmModalContext = (): NoUndefinedField<ConfirmModalContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		onClose = defaultOnClose
	} = useContext<ConfirmModalContextType>(ConfirmModalContext);

	return { color, colorMode, onClose };
};

export default useConfirmModalContext;
