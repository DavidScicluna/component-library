import { createContext, forwardRef, useCallback, useEffect } from 'react';

import {
	FloatingFocusManager,
	FloatingOverlay,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useRole
} from '@floating-ui/react';
import classNames from 'classnames';
import { isBoolean } from 'lodash-es';
import { useKey } from 'rooks';

import {
	__DEFAULT_APP_COLOR__,
	__DEFAULT_APP_COLORMODE__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_METHOD__,
	__DEFAULT_SPACING__
} from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { AnimatePresence, Transition } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box';
import { Box } from '@components/Box';
import type { CenterRef, GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_MODAL_AS__,
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_HAS_BACKDROP__,
	__DEFAULT_MODAL_ID__,
	__DEFAULT_MODAL_IS_OPEN__,
	__DEFAULT_MODAL_SIZE__
} from './common/constants';
import { useModalClasses, useModalResponsiveValues } from './common/hooks';
import { __KEYS_MODAL_CLASS__ } from './common/keys';
import type {
	ModalContext as ModalContextType,
	ModalDefaultElement,
	ModalElement,
	ModalProps,
	ModalRef
} from './common/types';
import { getModalID, getModalSubtitleID, getModalTitleID } from './common/utils';
import { ModalBackdrop } from './components';

export const ModalContext = createContext<ModalContextType<ModalDefaultElement>>({
	color: __DEFAULT_APP_COLOR__,
	colorMode: __DEFAULT_APP_COLORMODE__,
	id: __DEFAULT_MODAL_ID__,
	isOpen: __DEFAULT_MODAL_IS_OPEN__,
	onClose: __DEFAULT_METHOD__,
	spacing: __DEFAULT_SPACING__,
	size: __DEFAULT_MODAL_SIZE__
});

const Modal = forwardRef(function Modal<Element extends ModalElement>(
	props: ModalProps<Element>,
	ref: ModalRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_MODAL_AS__,
		id = __DEFAULT_MODAL_ID__,
		className = __DEFAULT_CLASSNAME__,
		renderTrigger,
		renderBackdrop,
		color,
		colorMode,
		closeOnEsc: closeOnEscProp = __DEFAULT_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick: closeOnOverlayClickProp = __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		hasBackdrop: hasBackdropProp = __DEFAULT_MODAL_HAS_BACKDROP__,
		isOpen: isOpenProp = __DEFAULT_MODAL_IS_OPEN__,
		onClose,
		onCloseComplete,
		onEsc,
		onOverlayClick,
		onOpen,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_MODAL_SIZE__,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_MODAL_IS_OPEN__);

	const {
		closeOnEsc,
		closeOnOverlayClick,
		hasBackdrop,
		isOpen: isModalOpen,
		size,
		spacing
	} = useModalResponsiveValues<Element>({
		closeOnEsc: closeOnEscProp,
		closeOnOverlayClick: closeOnOverlayClickProp,
		hasBackdrop: hasBackdropProp,
		isOpen: isOpenProp,
		spacing: spacingProp,
		size: sizeProp
	});

	const handleOpen = useCallback((): void => {
		setIsOpen.on();
		if (onOpen) {
			onOpen();
		}
	}, [onOpen]);

	const handleClose = useCallback((): void => {
		setIsOpen.off();
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	const handleEscapeClick = (): void => {
		handleClose();
		if (onEsc) {
			onEsc();
		}
	};

	const handleOverlayClick = useCallback((): void => {
		handleClose();
		if (onOverlayClick) {
			onOverlayClick();
		}
	}, [onOverlayClick]);

	const handleChange = (open: boolean): void => {
		if (open) {
			handleOpen();
		} else {
			handleClose();
		}
	};

	const { refs, context } = useFloating({ open: isOpen, onOpenChange: handleChange });

	const click = useClick(context);
	const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	const classes = useModalClasses<Element>({ color, colorMode, size, spacing });

	useEffect(() => {
		if (isBoolean(isModalOpen)) {
			if (isModalOpen) {
				setIsOpen.on();
			} else {
				setIsOpen.off();
			}
		}
	}, [isModalOpen]);

	useKey(['Escape'], handleEscapeClick, { when: closeOnEsc });

	return (
		<ModalContext.Provider value={{ color, colorMode, id, isOpen, onClose: handleClose, size, spacing }}>
			<AnimatePresence onExitComplete={onCloseComplete}>
				{renderTrigger ? (
					<Box
						{...(getReferenceProps() as BoxProps<PolymorphicDefaultElement>)}
						ref={refs.setReference as BoxRef<PolymorphicDefaultElement>}
					>
						{renderTrigger({
							color,
							colorMode,
							isOpen,
							onOpen: handleOpen
						})}
					</Box>
				) : null}

				<Transition as='section' transition='fade' in={isOpen}>
					<FloatingOverlay lockScroll style={{ zIndex: 1 }}>
						<FloatingFocusManager context={context}>
							<Grid
								{...(rest as GridProps<Element>)}
								as={as}
								ref={ref}
								id={getModalID(id)}
								className={classNames(__KEYS_MODAL_CLASS__, classes.container, {
									[className]: !!className
								})}
								w='100vw'
								h='100vh'
								templateColumns={1}
								templateRows={1}
								alignItems='stretch'
								alignContent='stretch'
								justifyItems='stretch'
								justifyContent='stretch'
								spacing={0}
							>
								{hasBackdrop && size !== 'full' ? (
									<GridItem columnStart={1} rowStart={1}>
										<Box className={classes.backdrop}>
											{renderBackdrop ? renderBackdrop({ color, colorMode }) : <ModalBackdrop />}
										</Box>
									</GridItem>
								) : null}

								<GridItem columnStart={1} rowStart={1} zIndex={1}>
									<Center
										{...getFloatingProps()}
										ref={refs.setFloating as CenterRef<PolymorphicDefaultElement>}
										aria-labelledby={getModalTitleID(id)}
										aria-describedby={getModalSubtitleID(id)}
										w='100%'
										h='100%'
										onClick={closeOnOverlayClick ? handleOverlayClick : undefined}
									>
										<Box className={classes.content}>{children}</Box>
									</Center>
								</GridItem>
							</Grid>
						</FloatingFocusManager>
					</FloatingOverlay>
				</Transition>
			</AnimatePresence>
		</ModalContext.Provider>
	);
});

// Modal.displayName = 'Modal';

export default Modal;
