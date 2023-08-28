import { useContext } from 'react';

import { __DEFAULT_METHOD__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { ConfirmModalContext } from '../../ConfirmModal';
import {
	__DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	__DEFAULT_CONFIRM_MODAL_SIZE__,
	__DEFAULT_CONFIRM_MODAL_SPACING__
} from '../constants';
import type { ConfirmModalContext as ConfirmModalContextType, ConfirmModalSize } from '../types';

const useConfirmModalContext = () => {
	const {
		color,
		colorMode,
		isOpen = __DEFAULT_CONFIRM_MODAL_IS_OPEN__,
		onClose = __DEFAULT_METHOD__,
		size: si = __DEFAULT_CONFIRM_MODAL_SIZE__,
		spacing: sp = __DEFAULT_CONFIRM_MODAL_SPACING__
	} = useContext<ConfirmModalContextType>(ConfirmModalContext);

	const size = useGetResponsiveValue<ConfirmModalSize>(si);

	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	return { color, colorMode, isOpen, onClose, size, spacing };
};

export default useConfirmModalContext;
