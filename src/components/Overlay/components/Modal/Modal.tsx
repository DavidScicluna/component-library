import type { ReactElement } from 'react';
import React, { createContext, forwardRef, useCallback } from 'react';

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
import { useKey } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { AnimatePresence, Fade } from '@components/Animation';
import { Box } from '@components/Box';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_HAS_BACKDROP__,
	__DEFAULT_MODAL_ID__,
	__DEFAULT_MODAL_IS_OPEN__,
	__DEFAULT_MODAL_SIZE__
} from './common/constants';
import { useModalClasses } from './common/hooks';
import { __KEYS_MODAL_CLASS__ } from './common/keys';
import type {
	ModalContext as ModalContextType,
	ModalDefaultElement,
	ModalElement,
	ModalProps,
	ModalRef,
	ModalSize
} from './common/types';
import { getModalID, getModalSubtitleID, getModalTitleID } from './common/utils';
import { ModalBackdrop } from './components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalContext = createContext<ModalContextType<any>>({
	id: __DEFAULT_MODAL_ID__,
	isOpen: __DEFAULT_MODAL_IS_OPEN__,
	onClose: __DEFAULT_METHOD__,
	size: __DEFAULT_MODAL_SIZE__,
	spacing: __DEFAULT_SPACING__
});

const Modal = forwardRef(function Modal<Element extends ModalElement = ModalDefaultElement>(
	props: ModalProps<Element>,
	ref: ModalRef<Element>
): ReactElement {
	const {
		children,
		id = __DEFAULT_MODAL_ID__,
		className = __DEFAULT_CLASSNAME__,
		renderTrigger,
		renderBackdrop,
		color,
		colorMode,
		closeOnEsc: closeonesc = __DEFAULT_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick: closeonoverlayclick = __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		hasBackdrop: backdrop = __DEFAULT_MODAL_HAS_BACKDROP__,
		onClose,
		onCloseComplete,
		onEsc,
		onOverlayClick,
		onOpen,
		size: si = __DEFAULT_MODAL_SIZE__,
		spacing: sp = __DEFAULT_SPACING__,
		...rest
	} = props;

	const closeOnEsc = useGetResponsiveValue<boolean>(closeonesc);
	const closeOnOverlayClick = useGetResponsiveValue<boolean>(closeonoverlayclick);
	const hasBackdrop = useGetResponsiveValue<boolean>(backdrop);

	const size = useGetResponsiveValue<ModalSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_MODAL_IS_OPEN__);

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

	useKey(['Escape'], handleEscapeClick, { when: closeOnEsc });

	return (
		<ModalContext.Provider value={{ color, colorMode, isOpen, onClose: handleClose, size, spacing }}>
			<AnimatePresence onExitComplete={onCloseComplete}>
				<>
					{renderTrigger({
						...getReferenceProps(),
						ref: refs.setReference,
						color,
						colorMode,
						isOpen,
						onOpen: handleOpen
					})}

					<Fade as='section' in={isOpen}>
						<FloatingOverlay lockScroll style={{ zIndex: 1 }}>
							<FloatingFocusManager context={context}>
								<Grid<Element>
									{...rest}
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
												{renderBackdrop ? (
													renderBackdrop({ color, colorMode })
												) : (
													<ModalBackdrop />
												)}
											</Box>
										</GridItem>
									) : null}

									<GridItem columnStart={1} rowStart={1} zIndex={1}>
										<Center
											{...getFloatingProps()}
											ref={refs.setFloating}
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
					</Fade>
				</>
			</AnimatePresence>
		</ModalContext.Provider>
	);
});

Modal.displayName = 'Modal';

export default Modal;
