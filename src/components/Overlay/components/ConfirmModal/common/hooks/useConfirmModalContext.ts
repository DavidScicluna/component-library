import { useContext } from 'react';

import { __DEFAULT_METHOD__ } from '@common/constants';

import { ConfirmModalContext } from '../../ConfirmModal';
import {
	__DEFAULT_CONFIRM_MODAL_ID__,
	__DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	__DEFAULT_CONFIRM_MODAL_SIZE__,
	__DEFAULT_CONFIRM_MODAL_SPACING__
} from '../constants';
import type { ConfirmModalContext as ConfirmModalContextType } from '../types';

import useConfirmModalResponsiveValues from './useConfirmModalResponsiveValues';

const useConfirmModalContext = () => {
	const {
		color,
		colorMode,
		id = __DEFAULT_CONFIRM_MODAL_ID__,
		isOpen = __DEFAULT_CONFIRM_MODAL_IS_OPEN__,
		onClose = __DEFAULT_METHOD__,
		spacing: spacingProp = __DEFAULT_CONFIRM_MODAL_SPACING__,
		size: sizeProp = __DEFAULT_CONFIRM_MODAL_SIZE__
	} = useContext<ConfirmModalContextType>(ConfirmModalContext);

	const { size, spacing } = useConfirmModalResponsiveValues({ spacing: spacingProp, size: sizeProp });

	return { color, colorMode, id, isOpen, onClose, size, spacing };
};

export default useConfirmModalContext;
