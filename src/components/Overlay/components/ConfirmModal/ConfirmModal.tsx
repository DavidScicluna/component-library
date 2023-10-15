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
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
	__DEFAULT_CONFIRM_MODAL_ID__,
	__DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	__DEFAULT_CONFIRM_MODAL_SIZE__,
	__DEFAULT_CONFIRM_MODAL_SPACING__
} from './common/constants';
import { useConfirmModalClasses } from './common/hooks';
import { __KEYS_CONFIRM_MODAL_CLASS__ } from './common/keys';
import type {
	ConfirmModalContext as ConfirmModalContextType,
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalProps,
	ConfirmModalRef,
	ConfirmModalSize
} from './common/types';
import { getConfirmModalID, getConfirmModalSubtitleID, getConfirmModalTitleID } from './common/utils';
import { ConfirmModalBackdrop } from './components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ConfirmModalContext = createContext<ConfirmModalContextType<any>>({
	id: __DEFAULT_CONFIRM_MODAL_ID__,
	isOpen: __DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	onClose: __DEFAULT_METHOD__,
	size: __DEFAULT_CONFIRM_MODAL_SIZE__,
	spacing: __DEFAULT_CONFIRM_MODAL_SPACING__
});

const ConfirmModal = forwardRef(function ConfirmModal<Element extends ConfirmModalElement = ConfirmModalDefaultElement>(
	props: ConfirmModalProps<Element>,
	ref: ConfirmModalRef<Element>
): ReactElement {
	const {
		children,
		id = __DEFAULT_CONFIRM_MODAL_ID__,
		className = __DEFAULT_CLASSNAME__,
		renderTrigger,
		renderBackdrop,
		color,
		colorMode,
		closeOnEsc: closeonesc = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick: closeonoverlayclick = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		hasBackdrop: backdrop = __DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
		onClose,
		onCloseComplete,
		onEsc,
		onOverlayClick,
		onOpen,
		size: si = __DEFAULT_CONFIRM_MODAL_SIZE__,
		spacing: sp = __DEFAULT_SPACING__,
		...rest
	} = props;

	const closeOnEsc = useGetResponsiveValue<boolean>(closeonesc);
	const closeOnOverlayClick = useGetResponsiveValue<boolean>(closeonoverlayclick);
	const hasBackdrop = useGetResponsiveValue<boolean>(backdrop);

	const size = useGetResponsiveValue<ConfirmModalSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_CONFIRM_MODAL_IS_OPEN__);

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

	const classes = useConfirmModalClasses<Element>({ color, colorMode, size, spacing });

	useKey(['Escape'], handleEscapeClick, { when: closeOnEsc });

	return (
		<ConfirmModalContext.Provider value={{ color, colorMode, isOpen, onClose: handleClose, size, spacing }}>
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
									id={getConfirmModalID(id)}
									className={classNames(__KEYS_CONFIRM_MODAL_CLASS__, classes.container, {
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
									{hasBackdrop ? (
										<GridItem columnStart={1} rowStart={1}>
											<Box className={classes.backdrop}>
												{renderBackdrop ? (
													renderBackdrop({ color, colorMode })
												) : (
													<ConfirmModalBackdrop />
												)}
											</Box>
										</GridItem>
									) : null}

									<GridItem columnStart={1} rowStart={1} zIndex={1}>
										<Center
											{...getFloatingProps()}
											ref={refs.setFloating}
											aria-labelledby={getConfirmModalTitleID(id)}
											aria-describedby={getConfirmModalSubtitleID(id)}
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
		</ConfirmModalContext.Provider>
	);
});

ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;
