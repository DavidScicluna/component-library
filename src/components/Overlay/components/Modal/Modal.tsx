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
	DEFAULT_APP_COLOR,
	DEFAULT_APP_COLORMODE,
	DEFAULT_CLASSNAME,
	DEFAULT_METHOD,
	DEFAULT_SPACING
} from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { AnimatePresence, Transition } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box';
import { Box } from '@components/Box';
import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_MODAL_AS,
	DEFAULT_MODAL_CLOSE_ON_ESC,
	DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
	DEFAULT_MODAL_HAS_BACKDROP,
	DEFAULT_MODAL_ID,
	DEFAULT_MODAL_IS_OPEN,
	DEFAULT_MODAL_SIZE,
	DEFAULT_MODAL_TRANSITION
} from './common/constants';
import { useModalClasses, useModalResponsiveValues } from './common/hooks';
import { KEYS_MODAL_CLASS } from './common/keys';
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
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	id: DEFAULT_MODAL_ID,
	isOpen: DEFAULT_MODAL_IS_OPEN,
	onClose: DEFAULT_METHOD,
	spacing: DEFAULT_SPACING,
	size: DEFAULT_MODAL_SIZE
});

const Modal = forwardRef(function Modal<Element extends ModalElement>(
	props: ModalProps<Element>,
	ref: ModalRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_MODAL_AS,
		id = DEFAULT_MODAL_ID,
		className = DEFAULT_CLASSNAME,
		renderTrigger,
		renderBackdrop,
		color,
		colorMode,
		closeOnEsc: closeOnEscProp = DEFAULT_MODAL_CLOSE_ON_ESC,
		closeOnOverlayClick: closeOnOverlayClickProp = DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
		hasBackdrop: hasBackdropProp = DEFAULT_MODAL_HAS_BACKDROP,
		isOpen: isOpenProp = DEFAULT_MODAL_IS_OPEN,
		onClose,
		onCloseComplete,
		onEsc,
		onOverlayClick,
		onOpen,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_MODAL_SIZE,
		transition: transitionProp = DEFAULT_MODAL_TRANSITION,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(DEFAULT_MODAL_IS_OPEN);

	const {
		closeOnEsc,
		closeOnOverlayClick,
		hasBackdrop,
		isOpen: isModalOpen,
		size,
		spacing,
		transition
	} = useModalResponsiveValues<Element>({
		closeOnEsc: closeOnEscProp,
		closeOnOverlayClick: closeOnOverlayClickProp,
		hasBackdrop: hasBackdropProp,
		isOpen: isOpenProp,
		spacing: spacingProp,
		size: sizeProp,
		transition: transitionProp
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

				<Transition as='section' transition={transition} in={isOpen}>
					<FloatingOverlay className={classes.overlay} lockScroll>
						<FloatingFocusManager context={context}>
							<Grid
								{...rest}
								as={as}
								ref={ref}
								id={getModalID(id)}
								className={classNames(KEYS_MODAL_CLASS, classes.container, {
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
