import type { ElementType, ReactElement } from 'react';
import React, { forwardRef, useCallback, useRef } from 'react';

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
	useRole
} from '@floating-ui/react';
import classNames from 'classnames';
import { useMergeRefs } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius } from '@common/types';

import { AnimatePresence, Fade } from '@components/Animation';
import { Box } from '@components/Box';

import {
	__DEFAULT_POPPER_CLOSE_DELAY__,
	__DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE__,
	__DEFAULT_POPPER_CLOSE_ON_ESC__,
	__DEFAULT_POPPER_GUTTER__,
	__DEFAULT_POPPER_IS_DISABLED__,
	__DEFAULT_POPPER_IS_OPEN__,
	__DEFAULT_POPPER_OPEN_DELAY__,
	__DEFAULT_POPPER_PLACEMENT__
} from './common/constants';
import { usePopperClasses } from './common/hooks';
import { __KEYS_POPPER_CLASS__ } from './common/keys';
import type { PopperPlacement, PopperProps, PopperRef } from './common/types';

const Popper = forwardRef(function Popper<Element extends ElementType>(
	props: PopperProps<Element>,
	ref: PopperRef<Element>
): ReactElement {
	const arrowRef = useRef<HTMLElement>(null);

	const {
		children,
		renderTrigger,
		color,
		colorMode,
		className = __DEFAULT_CLASSNAME__,
		closeDelay: cd = __DEFAULT_POPPER_CLOSE_DELAY__,
		openDelay: od = __DEFAULT_POPPER_OPEN_DELAY__,
		closeOnClickOutside: closeonclickoutside = __DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE__,
		closeOnEsc: closeonesc = __DEFAULT_POPPER_CLOSE_ON_ESC__,
		gutter: g = __DEFAULT_POPPER_GUTTER__,
		isDisabled: disabled = __DEFAULT_POPPER_IS_DISABLED__,
		onClose,
		onCloseComplete,
		onOpen,
		placement: p = __DEFAULT_POPPER_PLACEMENT__,
		radius: r = __DEFAULT_RADIUS__,
		...rest
	} = props;

	const closeDelay = useGetResponsiveValue<number>(cd);
	const openDelay = useGetResponsiveValue<number>(od);

	const closeOnClickOutside = useGetResponsiveValue<boolean>(closeonclickoutside);
	const closeOnEsc = useGetResponsiveValue<boolean>(closeonesc);

	const gutter = useGetResponsiveValue<number>(g);

	const isDisabled = useGetResponsiveValue<boolean>(disabled);

	const placement = useGetResponsiveValue<PopperPlacement>(p);
	const radius = useGetResponsiveValue<ThemeRadius>(r);

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_POPPER_IS_OPEN__);

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

	const refss = useMergeRefs(ref, refs.setFloating);

	const classes = usePopperClasses<Element>({ color, colorMode, radius });

	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			{renderTrigger({
				...getReferenceProps(),
				ref: refs.setReference,
				color,
				colorMode,
				isOpen,
				onOpen: handleOpen
			})}

			<Fade as='section' in={!isDisabled && isOpen}>
				<FloatingFocusManager context={context} modal={false}>
					<Box<Element>
						{...rest}
						{...getFloatingProps()}
						ref={refss}
						className={classNames(__KEYS_POPPER_CLASS__, classes.popper, { [className]: !!className })}
						style={floatingStyles}
					>
						<FloatingArrow ref={arrowRef} className={classes.arrow} context={context} />
						{children}
					</Box>
				</FloatingFocusManager>
			</Fade>
		</AnimatePresence>
	);
});

Popper.displayName = 'Popper';

export default Popper;
