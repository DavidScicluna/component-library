import { useContext } from 'react';

import { __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';

import { ModalContext } from '../../Modal';
import { __DEFAULT_MODAL_ID__, __DEFAULT_MODAL_IS_OPEN__, __DEFAULT_MODAL_SIZE__ } from '../constants';
import type { ModalContext as ModalContextType, ModalElement } from '../types';

import useModalResponsiveValues from './useModalResponsiveValues';

const useModalContext = <Element extends ModalElement>() => {
	const {
		color,
		colorMode,
		id = __DEFAULT_MODAL_ID__,
		isOpen = __DEFAULT_MODAL_IS_OPEN__,
		onClose = __DEFAULT_METHOD__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_MODAL_SIZE__
	} = useContext<ModalContextType<Element>>(ModalContext);

	const { size, spacing } = useModalResponsiveValues<Element>({ spacing: spacingProp, size: sizeProp });

	return { color, colorMode, id, isOpen, onClose, size, spacing };
};

export default useModalContext;
