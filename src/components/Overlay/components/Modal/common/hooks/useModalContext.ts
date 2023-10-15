import { useContext } from 'react';

import { __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { ModalContext } from '../../Modal';
import { __DEFAULT_MODAL_ID__, __DEFAULT_MODAL_IS_OPEN__, __DEFAULT_MODAL_SIZE__ } from '../constants';
import type { ModalContext as ModalContextType, ModalSize } from '../types';

const useModalContext = () => {
	const {
		color,
		colorMode,
		id = __DEFAULT_MODAL_ID__,
		isOpen = __DEFAULT_MODAL_IS_OPEN__,
		onClose = __DEFAULT_METHOD__,
		labelId,
		descriptionId,
		size: si = __DEFAULT_MODAL_SIZE__,
		spacing: sp = __DEFAULT_SPACING__
	} = useContext<ModalContextType>(ModalContext);

	const size = useGetResponsiveValue<ModalSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	return { color, colorMode, id, isOpen, onClose, labelId, descriptionId, size, spacing };
};

export default useModalContext;
