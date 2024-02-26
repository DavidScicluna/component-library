import { useContext } from 'react';

import { DEFAULT_METHOD } from '@common/constants';

import { ConfirmModalContext } from '../../ConfirmModal';
import {
	DEFAULT_CONFIRM_MODAL_ID,
	DEFAULT_CONFIRM_MODAL_IS_OPEN,
	DEFAULT_CONFIRM_MODAL_SIZE,
	DEFAULT_CONFIRM_MODAL_SPACING
} from '../constants';
import type { ConfirmModalContext as ConfirmModalContextType, ConfirmModalElement } from '../types';

import useConfirmModalResponsiveValues from './useConfirmModalResponsiveValues';

const useConfirmModalContext = <Element extends ConfirmModalElement>() => {
	const {
		color,
		colorMode,
		id = DEFAULT_CONFIRM_MODAL_ID,
		isOpen = DEFAULT_CONFIRM_MODAL_IS_OPEN,
		onClose = DEFAULT_METHOD,
		spacing: spacingProp = DEFAULT_CONFIRM_MODAL_SPACING,
		size: sizeProp = DEFAULT_CONFIRM_MODAL_SIZE
	} = useContext<ConfirmModalContextType<Element>>(ConfirmModalContext);

	const { size, spacing } = useConfirmModalResponsiveValues<Element>({ spacing: spacingProp, size: sizeProp });

	return { color, colorMode, id, isOpen, onClose, size, spacing };
};

export default useConfirmModalContext;
