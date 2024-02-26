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

import { DEFAULT_APP_COLOR, DEFAULT_APP_COLORMODE, DEFAULT_CLASSNAME, DEFAULT_METHOD } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { AnimatePresence, Transition } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box';
import { Box } from '@components/Box';
import type { CenterProps, CenterRef, GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_CONFIRM_MODAL_AS,
	DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC,
	DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK,
	DEFAULT_CONFIRM_MODAL_HAS_BACKDROP,
	DEFAULT_CONFIRM_MODAL_ID,
	DEFAULT_CONFIRM_MODAL_IS_OPEN,
	DEFAULT_CONFIRM_MODAL_SIZE,
	DEFAULT_CONFIRM_MODAL_SPACING
} from './common/constants';
import { useConfirmModalClasses, useConfirmModalResponsiveValues } from './common/hooks';
import { KEYS_CONFIRM_MODAL_CLASS } from './common/keys';
import type {
	ConfirmModalContext as ConfirmModalContextType,
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalProps,
	ConfirmModalRef
} from './common/types';
import { getConfirmModalID, getConfirmModalSubtitleID, getConfirmModalTitleID } from './common/utils';
import { ConfirmModalBackdrop } from './components';

export const ConfirmModalContext = createContext<ConfirmModalContextType<ConfirmModalDefaultElement>>({
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	id: DEFAULT_CONFIRM_MODAL_ID,
	isOpen: DEFAULT_CONFIRM_MODAL_IS_OPEN,
	onClose: DEFAULT_METHOD,
	spacing: DEFAULT_CONFIRM_MODAL_SPACING,
	size: DEFAULT_CONFIRM_MODAL_SIZE
});

const ConfirmModal = forwardRef(function ConfirmModal<Element extends ConfirmModalElement>(
	props: ConfirmModalProps<Element>,
	ref: ConfirmModalRef<Element>
): JSX.Element {
	const {
		as = DEFAULT_CONFIRM_MODAL_AS,
		children,
		id = DEFAULT_CONFIRM_MODAL_ID,
		className = DEFAULT_CLASSNAME,
		renderTrigger,
		renderBackdrop,
		renderCancel,
		color,
		colorMode,
		closeOnEsc: closeOnEscProp = DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC,
		closeOnOverlayClick: closeOnOverlayClickProp = DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK,
		hasBackdrop: hasBackdropProp = DEFAULT_CONFIRM_MODAL_HAS_BACKDROP,
		isOpen: isOpenProp = DEFAULT_CONFIRM_MODAL_IS_OPEN,
		onClose,
		onCloseComplete,
		onEsc,
		onOverlayClick,
		onOpen,
		spacing: spacingProp = DEFAULT_CONFIRM_MODAL_SPACING,
		size: sizeProp = DEFAULT_CONFIRM_MODAL_SIZE,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(DEFAULT_CONFIRM_MODAL_IS_OPEN);

	const {
		closeOnEsc,
		closeOnOverlayClick,
		hasBackdrop,
		isOpen: isConfirmModalOpen,
		spacing,
		size
	} = useConfirmModalResponsiveValues<Element>({
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

	const classes = useConfirmModalClasses<Element>({ color, colorMode, size, spacing });

	useEffect(() => {
		if (isBoolean(isConfirmModalOpen)) {
			if (isConfirmModalOpen) {
				setIsOpen.on();
			} else {
				setIsOpen.off();
			}
		}
	}, [isConfirmModalOpen]);

	useKey(['Escape'], handleEscapeClick, { when: closeOnEsc });

	return (
		<ConfirmModalContext.Provider value={{ color, colorMode, id, isOpen, onClose: handleClose, size, spacing }}>
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
								id={getConfirmModalID(id)}
								className={classNames(KEYS_CONFIRM_MODAL_CLASS, classes.container, {
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
										{...(getFloatingProps() as CenterProps<PolymorphicDefaultElement>)}
										ref={refs.setFloating as CenterRef<PolymorphicDefaultElement>}
										aria-labelledby={getConfirmModalTitleID(id)}
										aria-describedby={getConfirmModalSubtitleID(id)}
										w='100%'
										h='100%'
										onClick={closeOnOverlayClick ? handleOverlayClick : undefined}
									>
										<Box className={classes.content}>
											{renderCancel ? (
												<Center className={classes.cancel}>
													{renderCancel({ color, colorMode })}
												</Center>
											) : null}

											{children}
										</Box>
									</Center>
								</GridItem>
							</Grid>
						</FloatingFocusManager>
					</FloatingOverlay>
				</Transition>
			</AnimatePresence>
		</ConfirmModalContext.Provider>
	);
});

// ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;
