import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	DEFAULT_MODAL_CLOSE_ON_ESC,
	DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
	DEFAULT_MODAL_HAS_BACKDROP,
	DEFAULT_MODAL_IS_OPEN,
	DEFAULT_MODAL_SIZE
} from '../constants';
import type { ModalElement, ModalProps, ModalSize } from '../types';

type UseModalResponsiveValuesProps<Element extends ModalElement> = Partial<
	Pick<ModalProps<Element>, 'closeOnEsc' | 'closeOnOverlayClick' | 'hasBackdrop' | 'isOpen' | 'size' | 'spacing'>
>;

const useModalResponsiveValues = <Element extends ModalElement>(props: UseModalResponsiveValuesProps<Element>) => {
	const {
		closeOnEsc: closeOnEscProp = DEFAULT_MODAL_CLOSE_ON_ESC,
		closeOnOverlayClick: closeOnOverlayClickProp = DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
		hasBackdrop: hasBackdropProp = DEFAULT_MODAL_HAS_BACKDROP,
		isOpen: isOpenProp = DEFAULT_MODAL_IS_OPEN,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_MODAL_SIZE
	} = props;

	const closeOnEsc = useGetResponsiveValue<boolean>(closeOnEscProp);
	const closeOnOverlayClick = useGetResponsiveValue<boolean>(closeOnOverlayClickProp);
	const hasBackdrop = useGetResponsiveValue<boolean>(hasBackdropProp);
	const isOpen = useGetResponsiveValue<boolean>(isOpenProp);

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const size = useGetResponsiveValue<ModalSize>(sizeProp);

	return { closeOnEsc, closeOnOverlayClick, hasBackdrop, isOpen, spacing, size };
};

export default useModalResponsiveValues;
