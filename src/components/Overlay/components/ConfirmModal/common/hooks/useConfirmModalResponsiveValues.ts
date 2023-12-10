import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
	__DEFAULT_CONFIRM_MODAL_SIZE__,
	__DEFAULT_CONFIRM_MODAL_SPACING__
} from '../constants';
import type { ConfirmModalProps, ConfirmModalSize } from '../types';

type UseConfirmModalResponsiveValuesProps = Partial<
	Pick<ConfirmModalProps, 'closeOnEsc' | 'closeOnOverlayClick' | 'hasBackdrop' | 'spacing' | 'size'>
>;

const useConfirmModalResponsiveValues = (props: UseConfirmModalResponsiveValuesProps) => {
	const {
		closeOnOverlayClick: closeOnOverlayClickProp = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		closeOnEsc: closeOnEscProp = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
		hasBackdrop: hasBackdropProp = __DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
		spacing: spacingProp = __DEFAULT_CONFIRM_MODAL_SPACING__,
		size: sizeProp = __DEFAULT_CONFIRM_MODAL_SIZE__
	} = props;

	const closeOnEsc = useGetResponsiveValue<boolean>(closeOnOverlayClickProp);
	const closeOnOverlayClick = useGetResponsiveValue<boolean>(closeOnEscProp);
	const hasBackdrop = useGetResponsiveValue<boolean>(hasBackdropProp);

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const size = useGetResponsiveValue<ConfirmModalSize>(sizeProp);

	return { closeOnEsc, closeOnOverlayClick, hasBackdrop, spacing, size };
};

export default useConfirmModalResponsiveValues;
