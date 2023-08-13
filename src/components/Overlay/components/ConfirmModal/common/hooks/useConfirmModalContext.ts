import { useContext } from 'react';

import { __DEFAULT_METHOD__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { Space } from '@common/types/theme';

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

	const spacing = useGetResponsiveValue<Space>(sp);

	return { color, colorMode, isOpen, onClose, size, spacing };
};

export default useConfirmModalContext;
