import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import type { TransitionKey } from '@components/Animation';

import {
	DEFAULT_MODAL_CLOSE_ON_ESC,
	DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
	DEFAULT_MODAL_HAS_BACKDROP,
	DEFAULT_MODAL_IS_OPEN,
	DEFAULT_MODAL_SIZE,
	DEFAULT_MODAL_TRANSITION
} from '../constants';
import type { ModalElement, ModalProps, ModalSize } from '../types';

type PickedModalProps =
	| 'closeOnEsc'
	| 'closeOnOverlayClick'
	| 'hasBackdrop'
	| 'isOpen'
	| 'size'
	| 'spacing'
	| 'transition';
type UseModalResponsiveValuesProps<Element extends ModalElement> = Partial<Pick<ModalProps<Element>, PickedModalProps>>;

const useModalResponsiveValues = <Element extends ModalElement>(props: UseModalResponsiveValuesProps<Element>) => {
	const {
		closeOnEsc: closeOnEscProp = DEFAULT_MODAL_CLOSE_ON_ESC,
		closeOnOverlayClick: closeOnOverlayClickProp = DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
		hasBackdrop: hasBackdropProp = DEFAULT_MODAL_HAS_BACKDROP,
		isOpen: isOpenProp = DEFAULT_MODAL_IS_OPEN,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_MODAL_SIZE,
		transition: transitionProp = DEFAULT_MODAL_TRANSITION
	} = props;

	const closeOnEsc = useGetResponsiveValue<boolean>(closeOnEscProp);
	const closeOnOverlayClick = useGetResponsiveValue<boolean>(closeOnOverlayClickProp);
	const hasBackdrop = useGetResponsiveValue<boolean>(hasBackdropProp);
	const isOpen = useGetResponsiveValue<boolean>(isOpenProp);

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const size = useGetResponsiveValue<ModalSize>(sizeProp);

	const transition = useGetResponsiveValue<TransitionKey>(transitionProp);

	return { closeOnEsc, closeOnOverlayClick, hasBackdrop, isOpen, spacing, size, transition };
};

export default useModalResponsiveValues;
