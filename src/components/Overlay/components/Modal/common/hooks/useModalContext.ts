import { useContext } from 'react';

import { DEFAULT_METHOD, DEFAULT_SPACING } from '@common/constants';

import { ModalContext } from '../../Modal';
import { DEFAULT_MODAL_ID, DEFAULT_MODAL_IS_OPEN, DEFAULT_MODAL_SIZE } from '../constants';
import type { ModalContext as ModalContextType, ModalElement } from '../types';

import useModalResponsiveValues from './useModalResponsiveValues';

const useModalContext = <Element extends ModalElement>() => {
	const {
		color,
		colorMode,
		id = DEFAULT_MODAL_ID,
		isOpen = DEFAULT_MODAL_IS_OPEN,
		onClose = DEFAULT_METHOD,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_MODAL_SIZE
	} = useContext<ModalContextType<Element>>(ModalContext);

	const { size, spacing } = useModalResponsiveValues<Element>({ spacing: spacingProp, size: sizeProp });

	return { color, colorMode, id, isOpen, onClose, size, spacing };
};

export default useModalContext;
