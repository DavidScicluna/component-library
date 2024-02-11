import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_HAS_BACKDROP__,
	__DEFAULT_MODAL_IS_OPEN__,
	__DEFAULT_MODAL_SIZE__
} from '../constants';
import type { ModalElement, ModalProps, ModalSize } from '../types';

type UseModalResponsiveValuesProps<Element extends ModalElement> = Partial<
	Pick<ModalProps<Element>, 'closeOnEsc' | 'closeOnOverlayClick' | 'hasBackdrop' | 'isOpen' | 'size' | 'spacing'>
>;

const useModalResponsiveValues = <Element extends ModalElement>(props: UseModalResponsiveValuesProps<Element>) => {
	const {
		closeOnEsc: closeOnEscProp = __DEFAULT_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick: closeOnOverlayClickProp = __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		hasBackdrop: hasBackdropProp = __DEFAULT_MODAL_HAS_BACKDROP__,
		isOpen: isOpenProp = __DEFAULT_MODAL_IS_OPEN__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_MODAL_SIZE__
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
