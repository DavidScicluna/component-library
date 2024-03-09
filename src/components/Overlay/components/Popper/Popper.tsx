/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useCallback, useRef } from 'react';

import {
	arrow,
	autoUpdate,
	flip,
	FloatingArrow,
	FloatingFocusManager,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useMergeRefs,
	useRole
} from '@floating-ui/react';
import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import { AnimatePresence, Transition } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box';
import { Box } from '@components/Box';

import {
	DEFAULT_POPPER_CLOSE_DELAY,
	DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE,
	DEFAULT_POPPER_CLOSE_ON_ESC,
	DEFAULT_POPPER_GUTTER,
	DEFAULT_POPPER_IS_DISABLED,
	DEFAULT_POPPER_IS_OPEN,
	DEFAULT_POPPER_OPEN_DELAY,
	DEFAULT_POPPER_PLACEMENT
} from './common/constants';
import { usePopperClasses, usePopperResponsiveValues } from './common/hooks';
import { KEYS_POPPER_CLASS } from './common/keys';
import type { PopperProps, PopperRef } from './common/types';

const Popper = forwardRef(function Popper<Element extends PolymorphicElementType>(
	props: PopperProps<Element>,
	ref: PopperRef<Element>
): JSX.Element {
	const arrowRef = useRef<HTMLElement>(null);

	const {
		children,
		renderTrigger,
		color,
		colorMode,
		className = DEFAULT_CLASSNAME,
		closeDelay: closeDelayProp = DEFAULT_POPPER_CLOSE_DELAY,
		openDelay: openDelayProp = DEFAULT_POPPER_OPEN_DELAY,
		closeOnClickOutside: closeOnClickOutsideProp = DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE,
		closeOnEsc: closeOnEscProp = DEFAULT_POPPER_CLOSE_ON_ESC,
		gutter: gutterProp = DEFAULT_POPPER_GUTTER,
		isDisabled: isDisabledProp = DEFAULT_POPPER_IS_DISABLED,
		onClose,
		onCloseComplete,
		onOpen,
		placement: placementProp = DEFAULT_POPPER_PLACEMENT,
		radius: radiusProp = DEFAULT_RADIUS,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(DEFAULT_POPPER_IS_OPEN);

	const { closeDelay, openDelay, closeOnClickOutside, closeOnEsc, gutter, isDisabled, placement, radius } =
		usePopperResponsiveValues<Element>({
			closeDelay: closeDelayProp,
			openDelay: openDelayProp,
			closeOnClickOutside: closeOnClickOutsideProp,
			closeOnEsc: closeOnEscProp,
			gutter: gutterProp,
			isDisabled: isDisabledProp,
			placement: placementProp,
			radius: radiusProp
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

	const handleChange = (open: boolean): void => {
		if (open) {
			handleOpen();
		} else {
			handleClose();
		}
	};

	const { refs, floatingStyles, context } = useFloating({
		placement,
		open: isOpen,
		onOpenChange: handleChange,
		middleware: [arrow({ element: arrowRef }), offset(gutter), flip(), shift()],
		whileElementsMounted: autoUpdate
	});

	const hover = useHover(context, { delay: { open: openDelay, close: closeDelay }, move: false });
	const focus = useFocus(context);
	const dismiss = useDismiss(context, { escapeKey: closeOnEsc, outsidePress: closeOnClickOutside });
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

	const refss = useMergeRefs([ref, refs.setFloating as any]);

	const classes = usePopperClasses<Element>({ color, colorMode, radius });

	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
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
			<Transition as='section' transition='fade' in={!isDisabled && isOpen}>
				<FloatingFocusManager context={context} modal={false}>
					<Box
						{...rest}
						{...getFloatingProps()}
						ref={refss}
						className={classNames(KEYS_POPPER_CLASS, classes.popper, { [className]: !!className })}
						style={floatingStyles}
					>
						<FloatingArrow ref={arrowRef as any} className={classes.arrow} context={context} />
						{children}
					</Box>
				</FloatingFocusManager>
			</Transition>
		</AnimatePresence>
	);
});

// Popper.displayName = 'Popper';

export default Popper;
