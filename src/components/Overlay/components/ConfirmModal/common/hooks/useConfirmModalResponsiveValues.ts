import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import type { TransitionKey } from '@components/Animation';

import {
	DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC,
	DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK,
	DEFAULT_CONFIRM_MODAL_HAS_BACKDROP,
	DEFAULT_CONFIRM_MODAL_IS_OPEN,
	DEFAULT_CONFIRM_MODAL_SIZE,
	DEFAULT_CONFIRM_MODAL_SPACING,
	DEFAULT_CONFIRM_MODAL_TRANSITION
} from '../constants';
import type { ConfirmModalElement, ConfirmModalProps, ConfirmModalSize } from '../types';

type PickedConfirmModalProps =
	| 'closeOnEsc'
	| 'closeOnOverlayClick'
	| 'hasBackdrop'
	| 'isOpen'
	| 'spacing'
	| 'size'
	| 'transition';
type UseConfirmModalResponsiveValuesProps<Element extends ConfirmModalElement> = Partial<
	Pick<ConfirmModalProps<Element>, PickedConfirmModalProps>
>;

const useConfirmModalResponsiveValues = <Element extends ConfirmModalElement>(
	props: UseConfirmModalResponsiveValuesProps<Element>
) => {
	const {
		closeOnOverlayClick: closeOnOverlayClickProp = DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK,
		closeOnEsc: closeOnEscProp = DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC,
		hasBackdrop: hasBackdropProp = DEFAULT_CONFIRM_MODAL_HAS_BACKDROP,
		isOpen: isOpenProp = DEFAULT_CONFIRM_MODAL_IS_OPEN,
		spacing: spacingProp = DEFAULT_CONFIRM_MODAL_SPACING,
		size: sizeProp = DEFAULT_CONFIRM_MODAL_SIZE,
		transition: transitionProp = DEFAULT_CONFIRM_MODAL_TRANSITION
	} = props;

	const closeOnEsc = useGetResponsiveValue<boolean>(closeOnOverlayClickProp);
	const closeOnOverlayClick = useGetResponsiveValue<boolean>(closeOnEscProp);
	const hasBackdrop = useGetResponsiveValue<boolean>(hasBackdropProp);
	const isOpen = useGetResponsiveValue<boolean>(isOpenProp);

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const size = useGetResponsiveValue<ConfirmModalSize>(sizeProp);

	const transition = useGetResponsiveValue<TransitionKey>(transitionProp);

	return { closeOnEsc, closeOnOverlayClick, hasBackdrop, isOpen, spacing, size, transition };
};

export default useConfirmModalResponsiveValues;
