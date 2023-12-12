import type { ReactElement } from 'react';
import { createContext, forwardRef, useCallback } from 'react';

import {
	FloatingFocusManager,
	FloatingOverlay,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useRole
} from '@floating-ui/react';
import { useKey } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { AnimatePresence, Transition } from '@components/Animation';
import { Box } from '@components/Box';
import type { CenterRef } from '@components/Layout';
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
import { useConfirmModalClasses, useConfirmModalResponsiveValues } from './common/hooks';
import { __KEYS_CONFIRM_MODAL_CLASS__ } from './common/keys';
import type {
	ConfirmModalContext as ConfirmModalContextType,
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalProps,
	ConfirmModalRef
} from './common/types';
import { getConfirmModalID, getConfirmModalSubtitleID, getConfirmModalTitleID } from './common/utils';
import { ConfirmModalBackdrop } from './components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const ConfirmModalContext = createContext<ConfirmModalContextType>({
	id: __DEFAULT_CONFIRM_MODAL_ID__,
	isOpen: __DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	onClose: __DEFAULT_METHOD__,
	spacing: __DEFAULT_CONFIRM_MODAL_SPACING__,
	size: __DEFAULT_CONFIRM_MODAL_SIZE__
});

const ConfirmModal: PolymorphicComponentWithRef = forwardRef(function ConfirmModal<
	Element extends ConfirmModalElement = ConfirmModalDefaultElement
>(props: ConfirmModalProps<Element>, ref: ConfirmModalRef<Element>): ReactElement {
	const {
		children,
		id = __DEFAULT_CONFIRM_MODAL_ID__,
		className = __DEFAULT_CLASSNAME__,
		renderTrigger,
		renderBackdrop,
		renderCancel,
		color,
		colorMode,
		closeOnEsc: closeOnEscProp = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick: closeOnOverlayClickProp = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		hasBackdrop: hasBackdropProp = __DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
		onClose,
		onCloseComplete,
		onEsc,
		onOverlayClick,
		onOpen,
		spacing: spacingProp = __DEFAULT_CONFIRM_MODAL_SPACING__,
		size: sizeProp = __DEFAULT_CONFIRM_MODAL_SIZE__,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_CONFIRM_MODAL_IS_OPEN__);

	const { closeOnEsc, closeOnOverlayClick, hasBackdrop, spacing, size } = useConfirmModalResponsiveValues({
		closeOnEsc: closeOnEscProp,
		closeOnOverlayClick: closeOnOverlayClickProp,
		hasBackdrop: hasBackdropProp,
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

	const classes = useConfirmModalClasses({ color, colorMode, size, spacing });

	useKey(['Escape'], handleEscapeClick, { when: closeOnEsc });

	return (
		<ConfirmModalContext.Provider value={{ color, colorMode, id, isOpen, onClose: handleClose, size, spacing }}>
			<AnimatePresence onExitComplete={onCloseComplete}>
				{renderTrigger({
					...getReferenceProps(),
					ref: refs.setReference,
					color,
					colorMode,
					isOpen,
					onOpen: handleOpen
				})}

				<Transition as='section' transition='fade' in={isOpen}>
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
										ref={refs.setFloating as CenterRef}
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

ConfirmModal.displayName = 'ConfirmModal';

export default <Element extends ConfirmModalElement = ConfirmModalDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <ConfirmModal<Element> {...props} />;
